package com.criancafeliz.controller;

import com.criancafeliz.model.Father;
import com.criancafeliz.repository.FatherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/persons")
@RestController
public class PersonController {

    @Autowired
    private FatherRepository fatherRepository;


    @PostMapping
    public Father createFather (@RequestBody Father father) throws Exception{
        Father isExist = fatherRepository.findByEmail(father.getEmail());
        if(isExist!=null){
            throw new Exception ("Este usuário está vinculado ao email " +father.getEmail());
        }
        return fatherRepository.save(father);
    }

}
