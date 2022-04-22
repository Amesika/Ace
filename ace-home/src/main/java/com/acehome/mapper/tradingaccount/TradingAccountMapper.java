package com.acehome.mapper.tradingaccount;

import java.util.List;

import com.acehome.entities.signal.Signal;
import com.acehome.entities.tradingaccount.TradingAccount;
import com.acehome.model.signal.SignalDto;
import com.acehome.model.tradingaccount.TradingAccountDto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;

@Mapper
public interface TradingAccountMapper {
    
    @Mappings({
        @Mapping(target="signal",source="signalDto", qualifiedByName = "Signal")
    })
    TradingAccount dtoToTradingAccount(TradingAccountDto tradingAccountDto);
    
    @Mappings({
        @Mapping(target="signalDto",source="signal", qualifiedByName = "SignalDto")
    })
    TradingAccountDto tradingAccountToDto(TradingAccount tradingAccount);

    List<TradingAccountDto> map(List<TradingAccount> tradingAccounts);

    @Named("Signal")
    Signal dtoToSignal(SignalDto signalDto);

    @Named("SignalDto")
    SignalDto signalToDto(Signal signal);
}
