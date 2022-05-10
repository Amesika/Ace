package com.acehome.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.acehome.entities.activity.Action;
import com.acehome.entities.activity.Category;
import com.acehome.model.bank.BankDto;
import com.acehome.model.tradingaccount.TradingAccountDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDTO {
    private Long id;
    private String description;
    private float amount;
    private String note;
    private String _type;
    private String _date;
    private BankDto bankDto;
    private Action action;
    private Category category;
    private TradingAccountDto traccountDto;
}
