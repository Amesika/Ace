package com.acehome.mapper;

import java.util.List;

import com.acehome.entities.Debt;
import com.acehome.model.DebtDTO;

import org.mapstruct.Mapper;


@Mapper
public interface DebtMapper {
    
    Debt dtoToDebt(DebtDTO DebtDto);
    DebtDTO debtToDto(Debt Debt);
    
    List<DebtDTO> map(List<Debt> debts);
}
