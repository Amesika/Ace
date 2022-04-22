package com.acehome.controllers.signal;

import java.util.List;

import com.acehome.model.signal.SignalDto;
import com.acehome.services.signal.SignalService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("signal")
public class SignalController {
    
        
    @Autowired
    SignalService signalSrv;

    private static Logger logger = LogManager.getLogger(SignalController.class);

    @GetMapping()
    public ResponseEntity<?> getSignals() {
        logger.info("Get all active signals");
        List<SignalDto> signalsDto = signalSrv.list();
        return new ResponseEntity<>(signalsDto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSignal(@PathVariable("id") Long id) {
        logger.info("Get one signal");
        SignalDto signalDto = signalSrv.get(id);
        return new ResponseEntity<>(signalDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createSignal(@RequestBody SignalDto signalDto) {
        logger.info("Create signal");
        logger.info(signalDto);
        SignalDto newActDto = signalSrv.add(signalDto);
        return new ResponseEntity<>(newActDto, HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateSignal(@RequestBody SignalDto signalDto) {
        logger.info("Update signal");
        logger.info(signalDto);
        SignalDto updateActDto = signalSrv.update(signalDto);
        return new ResponseEntity<>(updateActDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSignal(@PathVariable("id") Long id) {
        logger.info("Delete signal");
        boolean result = signalSrv.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
