package com.criancafeliz.controller;

import com.criancafeliz.model.Father;
import com.criancafeliz.model.Son;
import com.criancafeliz.repository.FatherRepository;
import com.criancafeliz.repository.SonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/sons")
@RestController
public class SonController {

    @Autowired
    private SonRepository sonRepository;

    @Autowired
    private FatherRepository fatherRepository;

    @PutMapping ("/{idFather}")
    public Father createSon (@PathVariable ("idFather") Long idFather, @RequestBody Son son) throws Exception{
        Father fathers = new Father();
        Optional <Father> father = fatherRepository.findById(idFather);
        if(father.isPresent()){
            fathers = father.get();
        }
        Optional <Son> sons = sonRepository.findByCpf(son.getCpf());
        if(sons.isEmpty()){
            throw new Exception ("Filho cadastrado com sucesso " +son.getName());
        }

        List<Son> sons1 = fathers.getSons();
        sons1.add(son);

        return fatherRepository.save(father);
    }

    @DeleteMapping("/{personId}")
    public String deleteSons (@PathVariable Long sonId) throws Exception{
        sonRepository.deleteById(sonId);
        return "Cadastro de filho deletado com sucesso";
    }

}
