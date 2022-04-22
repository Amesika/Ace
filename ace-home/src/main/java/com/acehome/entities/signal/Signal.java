package com.acehome.entities.signal;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.acehome.entities.tradingaccount.TradingAccount;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Entity()
@Table(name="signal")
@Getter
@Setter
@AllArgsConstructor
public class Signal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String name;

    @Column()
    private String author;
    
    @Column()
    private String site;

    @Column()
    private Boolean _delete;

    @OneToOne(mappedBy = "signal")
    private TradingAccount traccount;

    public Signal(){
        _delete = false;
    }
}
