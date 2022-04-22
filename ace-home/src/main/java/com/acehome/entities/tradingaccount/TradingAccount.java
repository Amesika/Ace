package com.acehome.entities.tradingaccount;

import javax.persistence.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.acehome.entities.activity.Activity;
import com.acehome.entities.signal.Signal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity()
@Table(name="traccount")
@Getter
@Setter
@AllArgsConstructor
public class TradingAccount {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String name;

    @Column()
    private String code;

    @Column()
    private String note;

    @Column()
    private String type;

    @Column()
    private String site;

    @Column()
    private Boolean _delete;

    @Column()
    private Boolean active;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "signal_id", referencedColumnName = "id")
    private Signal signal;

    @OneToMany(mappedBy="traccount", orphanRemoval = true,cascade = CascadeType.ALL)
    private Set<Activity> activities;

    public TradingAccount(){
        _delete = false;
    }
}
