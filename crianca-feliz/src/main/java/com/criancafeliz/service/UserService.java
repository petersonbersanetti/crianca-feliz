package com.criancafeliz.service;

import com.criancafeliz.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public User findUserById (Long userId) throws Exception;

    public User findUserByJwt (String jwt) throws Exception;

}
