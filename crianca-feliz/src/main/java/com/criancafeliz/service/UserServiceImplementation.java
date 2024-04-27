package com.criancafeliz.service;

import com.criancafeliz.model.Child;
import com.criancafeliz.model.User;
import com.criancafeliz.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional <User> opt = userRepository.findById(userId);

        if (opt.isPresent()){
            return opt.get();
        }
        throw new Exception ("Usuário não encontrado com id: " +userId);
    }
}
