package com.acehome.services.tradingaccount;

import java.util.List;

import com.acehome.entities.tradingaccount.TradingAccount;
import com.acehome.mapper.tradingaccount.TradingAccountMapper;
import com.acehome.model.tradingaccount.TradingAccountDto;
import com.acehome.model.tradingaccount.TradingAccountSoldDto;
import com.acehome.model.tradingaccount.TradingAccountStateDto;
import com.acehome.repositories.tradingaccount.TradingAccountRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradingAccountService {
    
    @Autowired
    private TradingAccountRepository tradingAccountRepo;  
    
    private TradingAccountMapper mapper = Mappers.getMapper(TradingAccountMapper.class);

    public List<TradingAccountDto> list() {
        return mapper.map(tradingAccountRepo.getAllTradingAccount());
    }

    public TradingAccountDto add(TradingAccountDto tradingAccountDto) {
        TradingAccount tradingAccount = mapper.dtoToTradingAccount(tradingAccountDto);
        tradingAccount = tradingAccountRepo.saveAndFlush(tradingAccount);
        return mapper.tradingAccountToDto(tradingAccount);
    }

    public TradingAccountDto get(Long id) {
        TradingAccount tradingAccount = tradingAccountRepo.findById(id).get();
        return mapper.tradingAccountToDto(tradingAccount);
    }

    public boolean delete(Long id) {
        TradingAccount tradingAccount = tradingAccountRepo.findById(id).get();
        tradingAccount.set_delete(true);
        tradingAccount = tradingAccountRepo.saveAndFlush(tradingAccount);
        return tradingAccount.get_delete();
    }

    public TradingAccountDto update(TradingAccountDto tradingAccountDto) {
        TradingAccount tradingAccount = mapper.dtoToTradingAccount(tradingAccountDto);
        tradingAccount = tradingAccountRepo.saveAndFlush(tradingAccount);
        return mapper.tradingAccountToDto(tradingAccount);
    }

    public void reset() {
        tradingAccountRepo.deleteAll();
    }

    public double sold() {
        return tradingAccountRepo.getAllTradingAccountSold();
    }

    public List<TradingAccountSoldDto> soldDetails() {
        return tradingAccountRepo.getAllTradingAccountSoldDetails();
    }

    public List<TradingAccountStateDto> state() {
        return tradingAccountRepo.getAllTradingAccountState();
    }

    public List<TradingAccountStateDto> state(Long id) {
        return tradingAccountRepo.getTradingAccountState(id);
    }
}
