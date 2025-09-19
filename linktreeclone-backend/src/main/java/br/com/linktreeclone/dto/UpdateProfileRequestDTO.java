package br.com.linktreeclone.dto;

public record UpdateProfileRequestDTO(
        String profileTitle,
        String bio,
        String profileImageUrl
) {}
