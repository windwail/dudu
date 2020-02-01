package ru.dudu.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "dudu_user")
@Getter @Setter
public class DAOUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique = true)
    private String username;
    @Column
    @JsonIgnore
    private String password;

    @Column
    private String roles; // comma separated roles

    @Column
    private String email;



}