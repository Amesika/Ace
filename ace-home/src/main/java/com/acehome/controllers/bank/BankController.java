package com.acehome.controllers.bank;

import java.util.List;

import com.acehome.model.bank.BankDto;
import com.acehome.model.bank.BankSoldDto;
import com.acehome.services.bank.BankService;

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
@RequestMapping("bank")
public class BankController {
    
    @Autowired
    BankService bankSrv;

    private static Logger logger = LogManager.getLogger(BankController.class);

    @GetMapping()
    public ResponseEntity<?> getBanks() {
        logger.info("Get all active banks");
        List<BankDto> banksDto = bankSrv.list();
        return new ResponseEntity<>(banksDto, HttpStatus.OK);
    }
    @GetMapping("/sold")
    public ResponseEntity<?> getBanksWithSold() {
        logger.info("Get all active banks with sold");
        List<BankSoldDto> banksDto = bankSrv.listWithSold();
        return new ResponseEntity<>(banksDto, HttpStatus.OK);
    }

    @GetMapping("/total-sold")
    public ResponseEntity<?> getTotalSold() {
        logger.info("Get Total Sold");
        double totalSold = bankSrv.totalSold();
        return new ResponseEntity<>(totalSold, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBank(@PathVariable("id") Long id) {
        logger.info("Get one bank");
        BankDto bankDto = bankSrv.get(id);
        return new ResponseEntity<>(bankDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createBank(@RequestBody BankDto bankDto) {
        logger.info("Create bank");
        logger.info(bankDto);
        BankDto newActDto = bankSrv.add(bankDto);
        return new ResponseEntity<>(newActDto, HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateBank(@RequestBody BankDto bankDto) {
        logger.info("Update bank");
        logger.info(bankDto);
        BankDto updateActDto = bankSrv.update(bankDto);
        return new ResponseEntity<>(updateActDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBank(@PathVariable("id") Long id) {
        logger.info("Delete bank");
        boolean result = bankSrv.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
