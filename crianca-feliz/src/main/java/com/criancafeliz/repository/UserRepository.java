package com.criancafeliz.repository;

import com.criancafeliz.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {

    public User findByCpf (String cpf);
    public User findByEmail (String email);
}
