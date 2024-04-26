package com.criancafeliz.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

    @GetMapping
    public String homeController(){
        return "Bem vindo ao Criança Feliz";
    }

//    @PostMapping
//    @PutMapping
//    @DeleteMapping
}
