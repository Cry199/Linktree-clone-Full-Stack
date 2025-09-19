package br.com.linktreeclone.service;

import br.com.linktreeclone.dto.LinkResponseDTO;
import br.com.linktreeclone.dto.UpdateProfileRequestDTO;
import br.com.linktreeclone.dto.UserProfileResponseDTO;
import br.com.linktreeclone.entity.User;
import br.com.linktreeclone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LinkService linkService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(User user)
    {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public UserProfileResponseDTO updateUserProfile(UpdateProfileRequestDTO dto)
    {
        User currentUser = getCurrentAuthenticatedUser();

        currentUser.setProfileTitle(dto.profileTitle());
        currentUser.setBio(dto.bio());
        currentUser.setProfileImageUrl(dto.profileImageUrl());

        User updatedUser = userRepository.save(currentUser);

        List<LinkResponseDTO> userLinks = linkService.getAllLinksForCurrentUser();

        return new UserProfileResponseDTO(updatedUser, null);
    }

    private User getCurrentAuthenticatedUser()
    {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
