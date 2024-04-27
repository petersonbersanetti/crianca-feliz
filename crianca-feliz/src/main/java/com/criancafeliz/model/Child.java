package com.criancafeliz.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Child {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long idSon;
    private String name;
    private String susCard;
    private String vacCard;
    private Date dateOfBirth;
    @ManyToOne
    private User user;

}
