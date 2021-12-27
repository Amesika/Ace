package com.acehome.services;

import java.util.List;

import com.acehome.entities.Debt;
import com.acehome.mapper.DebtMapper;
import com.acehome.model.DebtDTO;
import com.acehome.repositories.DebtRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DebtService {

    @Autowired
    DebtRepository debtRepo;

    private DebtMapper mapper= Mappers.getMapper(DebtMapper.class);

    // Create debt
    public DebtDTO createDebt(DebtDTO debtDto){

        Debt debt  = mapper.dtoToDebt(debtDto);
        DebtDTO newDebt;
        debt = debtRepo.saveAndFlush(debt);
        newDebt  = mapper.debtToDto(debt);
        return newDebt;
    }

    // Update Debt
    public DebtDTO updateDebt(DebtDTO debtDto){
       
        Debt debt  = mapper.dtoToDebt(debtDto);
        DebtDTO updateDebt;
        debt = debtRepo.saveAndFlush(debt);
        updateDebt  = mapper.debtToDto(debt);
        return updateDebt;
    }


    // Get Debt
    public DebtDTO getDebt(Long debtDtoId){

        DebtDTO getDebt;
        Debt debt;
        debt = debtRepo.findById(debtDtoId).get();
        getDebt  = mapper.debtToDto(debt);
        return getDebt;
    }


    // Delete Debt
    public Debt deleteDebt(Long debtDtoId){

        Debt debt;
        debt = debtRepo.findById(debtDtoId).get();
        debt.set_delete(true);
        debt = debtRepo.saveAndFlush(debt);

        return debt;
    }

    // Liste Debt
    public List<DebtDTO> listDebt(){

        List<DebtDTO> debts;
        List<Debt> list;
        //list = debtRepo.findAll();
        list = debtRepo.getDebts();
        debts = mapper.map(list);
        return debts;
    }

    // get balance
    public float balance(){

        return (float)debtRepo.getBalance() ;
    }

    
    
}
