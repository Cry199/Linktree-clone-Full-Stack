package br.com.linktreeclone.dto;

import br.com.linktreeclone.entity.User;

import java.util.List;
import java.util.UUID;

public record UserProfileResponseDTO(
        UUID id,
        String username,
        String email,
        String profileTitle,
        String bio,
        String profileImageUrl,
        List<LinkResponseDTO> links
)
{
    public UserProfileResponseDTO(User user, List<LinkResponseDTO> links)
    {
        this(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getProfileTitle(),
                user.getBio(),
                user.getProfileImageUrl(),
                links
        );
    }
}
