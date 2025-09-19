package br.com.linktreeclone.dto;

import br.com.linktreeclone.entity.User;

import java.util.List;

public record PublicProfileDTO(
        String username,
        List<LinkResponseDTO> links
)
{
    public PublicProfileDTO(User user, List<LinkResponseDTO> links)
    {
        this(user.getUsername(), links);
    }
}
