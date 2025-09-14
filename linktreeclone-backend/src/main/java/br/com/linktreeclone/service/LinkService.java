package br.com.linktreeclone.service;

import br.com.linktreeclone.dto.LinkRequestDTO;
import br.com.linktreeclone.dto.LinkResponseDTO;
import br.com.linktreeclone.entity.Link;
import br.com.linktreeclone.entity.User;
import br.com.linktreeclone.repository.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class LinkService
{
    @Autowired
    private LinkRepository linkRepository;

    public LinkResponseDTO createLink(LinkRequestDTO dto)
    {
        User currentUser = getCurrentAuthenticatedUser();
        Link newLink = new Link();
        newLink.setTitle(dto.title());
        newLink.setUrl(dto.url());
        newLink.setUser(currentUser);

        Link savedLink = linkRepository.save(newLink);
        return new LinkResponseDTO(savedLink);
    }

    public List<LinkResponseDTO> getAllLinksForCurrentUser()
    {
        User currentUser = getCurrentAuthenticatedUser();
        List<Link> links = linkRepository.findAllByUser(currentUser);

        return links.stream()
                .map(LinkResponseDTO::new)
                .collect(Collectors.toList());
    }

    public LinkResponseDTO updateLink(UUID id, LinkRequestDTO dto)
    {
        User currentUser = getCurrentAuthenticatedUser();
        Link linkToUpdate = linkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Link not found"));


        if (!linkToUpdate.getUser().getId().equals(currentUser.getId()))
        {
            throw new RuntimeException("Unauthorized to update this link");
        }

        linkToUpdate.setTitle(dto.title());
        linkToUpdate.setUrl(dto.url());
        Link updatedLink = linkRepository.save(linkToUpdate);
        return new LinkResponseDTO(updatedLink);
    }

    public void deleteLink(UUID id)
    {
        User currentUser = getCurrentAuthenticatedUser();
        Link linkToDelete = linkRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Link not found"));

        // Validação de segurança
        if (!linkToDelete.getUser().getId().equals(currentUser.getId())) {
            throw new RuntimeException("Unauthorized to delete this link");
        }

        linkRepository.delete(linkToDelete);
    }

    private User getCurrentAuthenticatedUser()
    {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
