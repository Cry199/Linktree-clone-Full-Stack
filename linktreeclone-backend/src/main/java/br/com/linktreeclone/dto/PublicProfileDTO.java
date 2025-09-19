package br.com.linktreeclone.dto;

import br.com.linktreeclone.entity.User;

import java.util.List;

public record PublicProfileDTO(
        String username,
        String profileTitle,
        String bio,
        String profileImageUrl,
        List<LinkResponseDTO> links
)
{
    public PublicProfileDTO(User user, List<LinkResponseDTO> links)
    {
        this(
                user.getUsername(),
                user.getProfileTitle(),
                user.getBio(),
                user.getProfileImageUrl(),
                links
        );
    }
}
