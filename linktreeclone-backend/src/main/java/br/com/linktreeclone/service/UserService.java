package br.com.linktreeclone.service;

import br.com.linktreeclone.entity.User;
import br.com.linktreeclone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(User user)
    {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    
    // Testando o workflow de CI/CD
    // Testando o workflow de CI/CD
    // Testando o workflow de CI/CD
}
