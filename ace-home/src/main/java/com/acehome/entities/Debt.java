package com.acehome.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity()
@Table(name="debt")
@Getter
@Setter
@AllArgsConstructor
public class Debt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String name;

    @Column()
    private String description;

    @Column()
    private String creditorName;

    @Column()
    private float initAmount;

    @Column()
    private float currentAmount;

    @Column()
    private float paymentAmount;

    @Column()
    private float rate;

    @Column(columnDefinition = "boolean default false")
    private Boolean _delete;

    public Debt(){
        _delete = false;
    }

}
