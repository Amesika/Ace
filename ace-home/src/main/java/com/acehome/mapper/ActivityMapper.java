package com.acehome.mapper;

import java.util.List;

import com.acehome.entities.activity.Activity;
import com.acehome.entities.bank.Bank;
import com.acehome.entities.tradingaccount.TradingAccount;
import com.acehome.mapper.bank.BankMapper;
import com.acehome.model.ActivityDTO;
import com.acehome.model.bank.BankDto;
import com.acehome.model.tradingaccount.TradingAccountDto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;

@Mapper
public interface ActivityMapper {

    @Mappings({
        @Mapping(target="bank",source="bankDto", qualifiedByName = "Bank"),
        @Mapping(target="traccount",source="traccountDto", qualifiedByName = "TradingAccount")
    })
    Activity dtoToActivity(ActivityDTO activityDto);

    @Mappings({
        @Mapping(target="bankDto",source="bank", qualifiedByName = "BankDto"),
        @Mapping(target="traccountDto",source="traccount", qualifiedByName = "TradingAccountDto")
    })
    ActivityDTO activityToDto(Activity activity);

    List<ActivityDTO> map(List<Activity> activities);

    @Named("Bank")
    Bank dtoToBank(BankDto bankDto);

    @Named("BankDto")
    BankDto bankToDto(Bank bank);

    @Named("TradingAccount")
    TradingAccount dtoToTradingAccount(TradingAccountDto tradingAccountDto);

    @Named("TradingAccountDto")
    TradingAccountDto tradingAccountToDto(TradingAccount tradingAccount);



}
