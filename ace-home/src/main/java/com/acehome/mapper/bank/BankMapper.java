package com.acehome.mapper.bank;

import java.util.List;

import com.acehome.entities.bank.Bank;
import com.acehome.model.bank.BankDto;

import org.mapstruct.Mapper;

@Mapper
public interface BankMapper {
    
    Bank dtoToBank(BankDto bankDto);

    BankDto bankToDto(Bank bank);

    List<BankDto> map(List<Bank> banks);
}
