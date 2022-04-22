package com.acehome.mapper.signal;

import java.util.List;

import com.acehome.entities.signal.Signal;
import com.acehome.model.signal.SignalDto;

import org.mapstruct.Mapper;

@Mapper
public interface SignalMapper {
    
    Signal dtoToSignal(SignalDto signalDto);

    SignalDto signalToDto(Signal signal);

    List<SignalDto> map(List<Signal> signals);
}
