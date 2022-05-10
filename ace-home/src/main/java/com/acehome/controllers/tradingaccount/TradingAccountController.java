package com.acehome.controllers.tradingaccount;

import java.util.List;

import com.acehome.model.ActivityDTO;
import com.acehome.model.tradingaccount.TradingAccountDto;
import com.acehome.model.tradingaccount.TradingAccountSoldDto;
import com.acehome.model.tradingaccount.TradingAccountStateDto;
import com.acehome.services.ActivityService;
import com.acehome.services.tradingaccount.TradingAccountService;

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
@RequestMapping("trading-account")
public class TradingAccountController {
    
    @Autowired
    TradingAccountService tradingAccountSrv;

    @Autowired
    ActivityService actSrv;

    private static Logger logger = LogManager.getLogger(TradingAccountController.class);

    @GetMapping()
    public ResponseEntity<?> getTradingAccounts() {
        logger.info("Get all active tradingAccounts");
        List<TradingAccountDto> tradingAccountsDto = tradingAccountSrv.list();
        return new ResponseEntity<>(tradingAccountsDto, HttpStatus.OK);
    }

    @GetMapping("sold")
    public ResponseEntity<?> getTradingAccountsSold() {
        logger.info("Get all active tradingAccounts total sold");
        double sold = tradingAccountSrv.sold();
        return new ResponseEntity<>(sold, HttpStatus.OK);
    }

    @GetMapping("sold-details")
    public ResponseEntity<?> getTradingAccountsSoldDetails() {
        logger.info("Get all active tradingAccounts sold details");
        List<TradingAccountSoldDto> tradingAccountsDto = tradingAccountSrv.soldDetails();
        return new ResponseEntity<>(tradingAccountsDto, HttpStatus.OK);
    }
    
    @GetMapping("state")
    public ResponseEntity<?> getTradingAccountsState() {
        logger.info("Get all active tradingAccounts total sold");
        List<TradingAccountStateDto> tradingAccountsDto = tradingAccountSrv.state();
        return new ResponseEntity<>(tradingAccountsDto, HttpStatus.OK);
    }

    @GetMapping("state/{id}")
    public ResponseEntity<?> getTradingAccountsStateDetails(@PathVariable("id") Long id) {
        logger.info("Get all active tradingAccounts sold details");
        List<TradingAccountStateDto> tradingAccountsDto = tradingAccountSrv.state(id);
        return new ResponseEntity<>(tradingAccountsDto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTradingAccount(@PathVariable("id") Long id) {
        logger.info("Get one tradingAccount");
        TradingAccountDto tradingAccountDto = tradingAccountSrv.get(id);
        return new ResponseEntity<>(tradingAccountDto, HttpStatus.OK);
    }

    @GetMapping("/{id}/activities")
    public ResponseEntity<?> getTradingAccountActivities(@PathVariable("id") Long id) {
        logger.info("Get Activities trading account");
		List<ActivityDTO> actsDto =  actSrv.listActivity(id);
		return new ResponseEntity<>(actsDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createTradingAccount(@RequestBody TradingAccountDto tradingAccountDto) {
        logger.info("Create tradingAccount");
        logger.info(tradingAccountDto);
        TradingAccountDto newActDto = tradingAccountSrv.add(tradingAccountDto);
        return new ResponseEntity<>(newActDto, HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateTradingAccount(@RequestBody TradingAccountDto tradingAccountDto) {
        logger.info("Update tradingAccount");
        logger.info(tradingAccountDto);
        TradingAccountDto updateActDto = tradingAccountSrv.update(tradingAccountDto);
        return new ResponseEntity<>(updateActDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTradingAccount(@PathVariable("id") Long id) {
        logger.info("Delete tradingAccount");
        boolean result = tradingAccountSrv.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
