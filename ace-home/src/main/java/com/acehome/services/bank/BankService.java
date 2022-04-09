package com.acehome.services.bank;

import java.util.List;

import com.acehome.entities.bank.Bank;
import com.acehome.mapper.bank.BankMapper;
import com.acehome.model.bank.BankDto;
import com.acehome.repositories.bank.BankRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankService {
    
    @Autowired
    private BankRepository bankRepo;  
    
    private BankMapper mapper = Mappers.getMapper(BankMapper.class);

    public List<BankDto> list() {
        return mapper.map(bankRepo.findAllByIsDeletedFalseOrderByNameAsc());
    }

    public BankDto add(BankDto bankDto) {
        Bank bank = mapper.dtoToBank(bankDto);
        bank = bankRepo.saveAndFlush(bank);
        return mapper.bankToDto(bank);
    }

    public BankDto get(Long id) {
        Bank bank = bankRepo.findById(id).get();
        return mapper.bankToDto(bank);
    }

    public boolean delete(Long id) {
        Bank bank = bankRepo.findById(id).get();
        bank.setDeleted(true);
        bank = bankRepo.saveAndFlush(bank);
        return bank.isDeleted();
    }

    public BankDto update(BankDto bankDto) {
        Bank bank = mapper.dtoToBank(bankDto);
        bank = bankRepo.saveAndFlush(bank);
        return mapper.bankToDto(bank);
    }

    public void reset() {
        bankRepo.deleteAll();
    }
}
