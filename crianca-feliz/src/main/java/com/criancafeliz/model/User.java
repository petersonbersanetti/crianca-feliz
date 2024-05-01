package com.criancafeliz.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idUser;
    private String name;

    @JsonProperty (access = JsonProperty.Access.WRITE_ONLY)
    private String cpf;
    private String email;

    @JsonProperty (access = JsonProperty.Access.WRITE_ONLY)
    private String password;
}
