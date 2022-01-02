package com.acehome.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity()
@Table(name="activity")
@Getter
@Setter
@AllArgsConstructor
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String description;

    @Column()
    private float amount;

    @Column()
    private String note;

    @Column()
    private String _type;

    @Column()
    private String _date;

    @Column()
    private Boolean _delete;

    public Activity(){
        _delete = false;
    }
    
}
