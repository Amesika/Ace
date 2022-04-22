package com.acehome.services.signal;

import java.util.List;

import com.acehome.entities.signal.Signal;
import com.acehome.mapper.signal.SignalMapper;
import com.acehome.model.signal.SignalDto;
import com.acehome.repositories.signal.SignalRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignalService {
    
    @Autowired
    private SignalRepository signalRepo;  
    
    private SignalMapper mapper = Mappers.getMapper(SignalMapper.class);

    public List<SignalDto> list() {
        return mapper.map(signalRepo.getAllSignal());
    }

    public SignalDto add(SignalDto signalDto) {
        Signal signal = mapper.dtoToSignal(signalDto);
        signal = signalRepo.saveAndFlush(signal);
        return mapper.signalToDto(signal);
    }

    public SignalDto get(Long id) {
        Signal signal = signalRepo.findById(id).get();
        return mapper.signalToDto(signal);
    }

    public boolean delete(Long id) {
        Signal signal = signalRepo.findById(id).get();
        signal.set_delete(true);
        signal = signalRepo.saveAndFlush(signal);
        return signal.get_delete();
    }

    public SignalDto update(SignalDto signalDto) {
        Signal signal = mapper.dtoToSignal(signalDto);
        signal = signalRepo.saveAndFlush(signal);
        return mapper.signalToDto(signal);
    }

    public void reset() {
        signalRepo.deleteAll();
    }
}
