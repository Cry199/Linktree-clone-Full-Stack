package br.com.linktreeclone.controller;

import br.com.linktreeclone.dto.LinkResponseDTO;
import br.com.linktreeclone.dto.UpdateProfileRequestDTO;
import br.com.linktreeclone.dto.UserProfileResponseDTO;
import br.com.linktreeclone.entity.User;

import br.com.linktreeclone.service.LinkService;
import br.com.linktreeclone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController
{
    @Autowired
    private UserService userService;

    @Autowired
    private LinkService linkService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user)
    {
        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }
    
    @GetMapping("/me")
    public ResponseEntity<UserProfileResponseDTO> getMyProfile()
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        List<LinkResponseDTO> userLinks = linkService.getAllLinksForCurrentUser();

        UserProfileResponseDTO profile = new UserProfileResponseDTO(currentUser, userLinks);

        return ResponseEntity.ok(profile);
    }

    @PutMapping("/me/profile")
    public ResponseEntity<UserProfileResponseDTO> updateProfile(@RequestBody UpdateProfileRequestDTO dto)
    {
        UserProfileResponseDTO updatedProfile = userService.updateUserProfile(dto);
        return ResponseEntity.ok(updatedProfile);
    }

}
