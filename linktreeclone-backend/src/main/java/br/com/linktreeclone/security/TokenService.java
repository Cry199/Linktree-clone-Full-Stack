package br.com.linktreeclone.security;

import br.com.linktreeclone.entity.User;
import br.com.linktreeclone.exception.InvalidTokenException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class TokenService
{
    @Value("${jwt.secret}")
    private String jwtSecretString;

    @Value("${jwt.expiration}")
    private Long jwtExpiration;

    private SecretKey key;

    private static final Logger logger = LoggerFactory.getLogger(TokenService.class);

    @PostConstruct
    public void init() {
        this.key = Keys.hmacShaKeyFor(jwtSecretString.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(User user)
    {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpiration);

        return Jwts.builder()
                .setSubject(user.getId().toString())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public String validateToken(String token)
    {
        try
        {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        }
        catch (ExpiredJwtException ex) {
            logger.error("Token JWT expirou: {}", ex.getMessage());
            throw new InvalidTokenException("Sua sessão expirou. Por favor, faça login novamente.");
        }
        catch (SignatureException ex) {
            logger.error("Assinatura do JWT é inválida: {}", ex.getMessage());
            throw new InvalidTokenException("Assinatura do token é inválida.");
        }
        catch (MalformedJwtException ex) {
            logger.error("Token JWT malformado: {}", ex.getMessage());
            throw new InvalidTokenException("Token malformado.");
        }
        catch (UnsupportedJwtException ex) {
            logger.error("Token JWT não é suportado: {}", ex.getMessage());
            throw new InvalidTokenException("Este tipo de token não é suportado.");
        }
        catch (IllegalArgumentException ex) {
            logger.error("O conteúdo do JWT está vazio: {}", ex.getMessage());
            throw new InvalidTokenException("Token inválido ou vazio.");
        }
    }
}