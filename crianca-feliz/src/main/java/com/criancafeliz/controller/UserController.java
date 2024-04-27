package com.criancafeliz.controller;

import com.criancafeliz.model.User;
import com.criancafeliz.repository.UserRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping
    public User createUser (@RequestBody User user) throws Exception{
        User isExist = userRepository.findByCpf(user.getCpf());
        User isPresent = userRepository.findByEmail(user.getEmail());
        if(isExist!=null){
            throw new Exception ("Este usuário já possui cadastro no sistema!");
        } if (isPresent!=null)
            throw new Exception ("Seu e-mail ja está vinculado a um usuário.");
     return userRepository.save(user);
    }

    @DeleteMapping ("/{userId}")
    public String deleteUser (@PathVariable Long userId) throws Exception {
        userRepository.deleteById(userId);
        return "Usuário deletado com sucesso!";
    }

    @GetMapping
    public List <User> getAllUsers() throws Exception {
        List <User> users = userRepository.findAll();
        return users;
    }
}

