package com.acehome.model;

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
    private TradingAccountDto traccountDto;
}
