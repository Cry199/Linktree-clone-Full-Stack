package br.com.linktreeclone.controller;

import br.com.linktreeclone.dto.PublicProfileDTO;
import br.com.linktreeclone.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PublicController
{
    @Autowired
    private LinkService linkService;

    @GetMapping("/{username}")
    public ResponseEntity<PublicProfileDTO> getPublicProfile(@PathVariable String username) {
        PublicProfileDTO publicProfile = linkService.getPublicProfileByUsername(username);
        return ResponseEntity.ok(publicProfile);
    }
}
