package com.onlinefood.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to the Online Food Multivendor Shop!";
    }
} 