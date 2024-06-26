package com.criancafeliz.controller;

import com.criancafeliz.config.JwtProvider;
import com.criancafeliz.model.User;
import com.criancafeliz.repository.UserRepository;
import com.criancafeliz.request.LoginRequest;
import com.criancafeliz.response.AuthResponse;
import com.criancafeliz.service.CustomeruserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomeruserDetailsService customeruserDetailsService;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public AuthResponse createUser(@RequestBody User user) throws Exception {
        String email = user.getEmail();
        String cpf = user.getCpf();
        String password = user.getPassword();
        String name = user.getName();

        User isExistEmail = userRepository.findByEmail(email);
        if (isExistEmail != null) {
            throw new Exception("O e-mail ja está sendo utilizado em outra conta");
        }

        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setCpf(cpf);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setName(name);

        User savedUser = userRepository.save(createdUser);

        AuthResponse res = new AuthResponse();
        res.setMessage("Cadastro realizado com sucesso!");
        return res;
    }

    @PostMapping ("/signin")
    public AuthResponse signinHandler (@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate (username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);
        AuthResponse res = new AuthResponse();

        res.setJwt(token);
        res.setMessage("Login realizado com sucesso!");

        return res;

    }

    private Authentication authenticate(String username, String password) {

        UserDetails userDetails = customeruserDetailsService.loadUserByUsername(username);

        if (userDetails == null){
            throw new BadCredentialsException("Usuário não encontrado");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Password inválido");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}