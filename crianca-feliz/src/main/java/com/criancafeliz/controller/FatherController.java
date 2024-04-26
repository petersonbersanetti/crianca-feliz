package com.criancafeliz.controller;

import com.criancafeliz.model.Father;
import com.criancafeliz.model.Son;
import com.criancafeliz.repository.FatherRepository;
import com.criancafeliz.repository.SonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class FatherController {

    @Autowired
    private SonRepository sonRepository;


    @GetMapping("/sons")
    public List<Son> getAllSonByFather () throws Exception{
        List<Son> sons = sonRepository.findAll();
        return sons;
    }

}
