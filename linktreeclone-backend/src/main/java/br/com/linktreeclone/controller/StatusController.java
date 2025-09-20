package br.com.linktreeclone.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class StatusController
{
    @GetMapping("/status")
    public ResponseEntity<Map<String, String>> getApiStatus() {
        Map<String, String> status = Map.of("status", "ok", "message", "API is running");
        return ResponseEntity.ok(status);
    }
}