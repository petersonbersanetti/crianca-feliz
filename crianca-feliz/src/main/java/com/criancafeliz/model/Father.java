package com.criancafeliz.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
public class Father extends Person {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long idFather;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idPerson(verificar)")
    private Person idPerson;
    private List<Son> sons;
    private String email;
    private String password;

}
