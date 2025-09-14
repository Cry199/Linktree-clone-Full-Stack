package br.com.linktreeclone.controller;

import br.com.linktreeclone.dto.LinkRequestDTO;
import br.com.linktreeclone.dto.LinkResponseDTO;
import br.com.linktreeclone.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/links")
public class LinkController
{
    @Autowired
    private LinkService linkService;

    @PostMapping
    public ResponseEntity<LinkResponseDTO> createLink(@RequestBody LinkRequestDTO body)
    {
        LinkResponseDTO newLink = linkService.createLink(body);
        return ResponseEntity.status(201).body(newLink);
    }

    @GetMapping
    public ResponseEntity<List<LinkResponseDTO>> getAllLinks()
    {
        List<LinkResponseDTO> links = linkService.getAllLinksForCurrentUser();
        return ResponseEntity.ok(links);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LinkResponseDTO> updateLink(@PathVariable UUID id, @RequestBody LinkRequestDTO body)
    {
        LinkResponseDTO updatedLink = linkService.updateLink(id, body);
        return ResponseEntity.ok(updatedLink);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLink(@PathVariable UUID id)
    {
        linkService.deleteLink(id);
        return ResponseEntity.noContent().build();
    }
}
