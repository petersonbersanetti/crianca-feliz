package com.criancafeliz.repository;

import com.criancafeliz.model.Child;
import com.criancafeliz.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChildRepository extends JpaRepository <Child, Long> {
    List<Child> findByUser(User user);
}
