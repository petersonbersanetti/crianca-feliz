package com.criancafeliz.controller;

import com.criancafeliz.config.ApiResponse;
import com.criancafeliz.model.Child;
import com.criancafeliz.model.User;
import com.criancafeliz.repository.UserRepository;
import com.criancafeliz.service.ChildService;
import com.criancafeliz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @DeleteMapping("/{idSon}")
    public ResponseEntity<?> deleteChild(@PathVariable Long idSon) {
        try {
            childService.deleteChild(idSon);
            return ResponseEntity.ok().body(new ApiResponse(true, "Cadastro de filho deletado com sucesso!"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(false, "Erro ao deletar o filho: " + e.getMessage()));
        }
    }


    @GetMapping("/user")
    public List<Child> getChildrenByUser(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);
        return childService.findChildrenByUser(user);
    }



}
