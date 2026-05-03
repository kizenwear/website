package com.kizenwear.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow frontend to call
public class BrandController {

    @GetMapping("/message")
    public Map<String, String> getBrandMessage() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome to Kizenwear: Continuous Improvement, Expressive Style.");
        response.put("vibe", "Premium Urban");
        response.put("philosophy", "Kaizen");
        return response;
    }
}
