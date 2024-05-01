package com.criancafeliz.controller;

import com.criancafeliz.model.Child;
import com.criancafeliz.model.User;
import com.criancafeliz.repository.UserRepository;
import com.criancafeliz.service.ChildService;
import com.criancafeliz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping ("/api/childs")
@RestController
public class ChildController {

    @Autowired
    private ChildService childService;

    @Autowired
    private UserService userService;

    @PostMapping ()
    public Child createChild (@RequestBody Child child, @RequestHeader ("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return childService.createChild(child, user);
    }

    @PutMapping ("/{id}")
    public Child updateChild (@RequestBody Child child, @PathVariable Long id) throws Exception {
        return childService.updateChild(child, id);
    }

    @GetMapping
    public List<Child> getAllChild () throws Exception {
        return childService.findAllChild();
    }

    @DeleteMapping ("/{userid}")
    public String deletelChild (@PathVariable Long childId) throws Exception {
        childService.deleteChild(childId);
        return "Cadastro de filho deletado com sucesso!";
    }


}
