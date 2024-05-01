package com.criancafeliz.service;

import com.criancafeliz.config.JwtProvider;
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

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional <User> opt = userRepository.findById(userId);

        if (opt.isPresent()){
            return opt.get();
        }
        throw new Exception ("Usuário não encontrado com id: " +userId);
    }

    @Override
    public User findUserByJwt (String jwt) throws Exception {

        String email = jwtProvider.getEmailFromToken(jwt);

        if(email == null){
            throw new Exception("Forneça um token válido...");
        }
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new Exception("Usuário não vinculado ao email " +email);

        }
        return user;
    }
}
