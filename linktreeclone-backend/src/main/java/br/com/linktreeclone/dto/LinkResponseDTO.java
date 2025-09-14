package br.com.linktreeclone.dto;

import br.com.linktreeclone.entity.Link;

import java.util.UUID;

public record LinkResponseDTO(UUID id, String title, String url)
{
    public LinkResponseDTO(Link link)
    {
        this(link.getId(), link.getTitle(), link.getUrl());
    }
}
