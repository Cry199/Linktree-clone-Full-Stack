package br.com.linktreeclone.controller;

import br.com.linktreeclone.dto.LoginRequestDTO;
import br.com.linktreeclone.dto.LoginResponseDTO;
import br.com.linktreeclone.entity.User;
import br.com.linktreeclone.exception.UnauthorizedException;
import br.com.linktreeclone.repository.UserRepository;
import br.com.linktreeclone.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO body)
    {
        User user = this.userRepository.findByEmail(body.email())
                .orElseThrow(() -> new RuntimeException("User not found."));

        if (passwordEncoder.matches(body.password(), user.getPassword()))
        {
            String token = this.tokenService.generateToken(user);
            return ResponseEntity.ok(new LoginResponseDTO(token));
        }

        throw new UnauthorizedException("Invalid password.");
    }
}
