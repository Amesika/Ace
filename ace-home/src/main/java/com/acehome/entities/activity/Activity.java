package com.acehome.entities.activity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.acehome.entities.bank.Bank;
import com.acehome.entities.tradingaccount.TradingAccount;

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

    @Column()
    @Enumerated(EnumType.STRING)
    private Action action;

    @Column()
    @Enumerated(EnumType.STRING)
    private Category category;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name="bank_id")
    private Bank  bank;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name="traccount_id")
    private TradingAccount traccount;

    public Activity(){
        _delete = false;
    }
    
}
