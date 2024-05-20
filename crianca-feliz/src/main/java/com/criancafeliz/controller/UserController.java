package com.criancafeliz.controller;

import com.criancafeliz.model.User;
import com.criancafeliz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/api/auth/users/profile")
    public User findUserByJwt (@RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwt(jwt);

        return user;
    }
}

