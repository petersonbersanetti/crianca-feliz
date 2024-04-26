package com.criancafeliz.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Son extends Person {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long idSon;
    private Person idPerson;
    private Father idFather;
    private String susCard;
    private String vacCard;
    private Date dateOfBirth;

}
