package com.criancafeliz.repository;

import com.criancafeliz.model.Father;
import com.criancafeliz.model.Son;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SonRepository extends JpaRepository <Son, Long> {

    Optional<Son> findByCpf (String Cpf);
}
