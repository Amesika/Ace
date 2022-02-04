package com.acehome.controllers;

import java.util.List;

import com.acehome.model.ActivityYearDTO;
import com.acehome.services.DashBordService;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("api/dash-bord")
public class DashBordController {

    @Autowired
    DashBordService dashSrv;

    private static Logger logger = LogManager.getLogger(DashBordController.class);


    @GetMapping()
    public ResponseEntity<?> getActivityMonths() {
		logger.info("Get Activity Months");
		List<ActivityYearDTO> dashActsDto =  dashSrv.activityTable();
		return new ResponseEntity<>(dashActsDto, HttpStatus.OK);
	}

}
