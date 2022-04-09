package com.acehome.entities.bank;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.acehome.entities.Activity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity()
@Table(name="bank")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Bank {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String name;

    @Column()
    private String number;
    
    @Column()
    private String description;

    @OneToMany(mappedBy="bank")
    private Set<Activity> activities;

    @Column()
    private boolean isDeleted;
}
