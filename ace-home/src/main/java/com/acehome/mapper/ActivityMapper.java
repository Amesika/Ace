package com.acehome.mapper;

import java.util.List;

import com.acehome.entities.Activity;
import com.acehome.entities.bank.Bank;
import com.acehome.mapper.bank.BankMapper;
import com.acehome.model.ActivityDTO;
import com.acehome.model.bank.BankDto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;

@Mapper
public interface ActivityMapper {

    @Mappings({
        @Mapping(target="bank",source="bankDto", qualifiedByName = "Bank")
    })
    Activity dtoToActivity(ActivityDTO activityDto);

    @Mappings({
        @Mapping(target="bankDto",source="bank", qualifiedByName = "BankDto")
    })
    ActivityDTO activityToDto(Activity activity);

    List<ActivityDTO> map(List<Activity> activities);

    @Named("Bank")
    Bank dtoToBank(BankDto bankDto);

    @Named("BankDto")
    BankDto bankToDto(Bank bank);

}
