package com.acehome.controllers;

import java.util.List;

import com.acehome.entities.Debt;
import com.acehome.model.DebtDTO;
import com.acehome.services.DebtService;

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
@RequestMapping("debt")
public class DebtController {

    @Autowired
    DebtService debtSrv;

    private static Logger logger = LogManager.getLogger(DebtService.class);


    @GetMapping()
    public ResponseEntity<?> getDebts() {
		logger.info("Get Debts");
		List<DebtDTO> actsDto =  debtSrv.listDebt();
		return new ResponseEntity<>(actsDto, HttpStatus.OK);
	}

    @GetMapping("/{id}")
    public ResponseEntity<?> getDebt(@PathVariable("id") Long activityDtoId) {
		logger.info("Get One Debt");
		DebtDTO actDto =  debtSrv.getDebt(activityDtoId);
		return new ResponseEntity<>(actDto, HttpStatus.OK);
	}

    @PostMapping()
    public ResponseEntity<?> createDebt(@RequestBody DebtDTO actDto) {
		logger.info("Create Debt");
		DebtDTO newDebtDto =  debtSrv.createDebt(actDto);
		return new ResponseEntity<>(newDebtDto, HttpStatus.OK);
	}

    @PutMapping()
    public ResponseEntity<?> updateDebt(@RequestBody DebtDTO actDto) {
		logger.info("Update Debt");
		DebtDTO updateDebtDto =  debtSrv.updateDebt(actDto);
		return new ResponseEntity<>(updateDebtDto, HttpStatus.OK);
	}

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDebt(@PathVariable("id") Long activityDtoId) {
		logger.info("Delete Debt");
		Debt actDto =  debtSrv.deleteDebt(activityDtoId);
		return new ResponseEntity<>(actDto, HttpStatus.OK);
	}

	@GetMapping("/balance")
    public ResponseEntity<?> getbalance() {
		logger.info("Get Balance");
		float balance=  debtSrv.balance();
		return new ResponseEntity<>(balance, HttpStatus.OK);
	}

    
}
