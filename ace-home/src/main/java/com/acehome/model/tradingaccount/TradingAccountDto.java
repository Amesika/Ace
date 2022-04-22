package com.acehome.model.tradingaccount;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import com.acehome.model.signal.SignalDto;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TradingAccountDto {
    
    private Long id;
    private String name;
    private String code;
    private String note;
    private String type;
    private String site;
    private Boolean active;
    private SignalDto signalDto;
}
