package com.criancafeliz.repository;

import com.criancafeliz.model.Child;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChildRepository extends JpaRepository <Child, Long> {

}
