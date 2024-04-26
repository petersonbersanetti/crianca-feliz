package com.criancafeliz.repository;

import com.criancafeliz.model.Father;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FatherRepository extends JpaRepository <Father, Long> {

    public Father findByEmail (String email);
}
