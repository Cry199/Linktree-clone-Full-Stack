package br.com.linktreeclone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class StatusController
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/status")
    public ResponseEntity<Map<String, String>> getApiStatus()
    {
        Map<String, String> status = new LinkedHashMap<>();
        status.put("api_status", "ok");
        status.put("message", "API is running");

        try
        {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            status.put("database_status", "ok");
            return ResponseEntity.ok(status);

        }
        catch (DataAccessException e)
        {
            status.put("database_status", "error");
            status.put("error_message", "Could not connect to the database");
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(status);
        }
    }
}