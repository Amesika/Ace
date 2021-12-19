package com.acehome.controllers;

import java.util.List;

import com.acehome.model.ActivityDTO;
import com.acehome.services.ActivityService;

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
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("api/activity")
public class ActivityController {

    @Autowired
    ActivityService actSrv;

    private static Logger logger = LogManager.getLogger(ActivityService.class);


    @GetMapping()
    public ResponseEntity<?> getActivities(
        @RequestParam("start-date") String startDate,
        @RequestParam("end-date") String endDate) {
		logger.info("Get Activities Between Two Date");
		List<ActivityDTO> actsDto =  actSrv.listActivity(startDate,endDate);
		return new ResponseEntity<>(actsDto, HttpStatus.OK);
	}

	@GetMapping("/all")
    public ResponseEntity<?> getActivities() {
		logger.info("Get Activities");
		List<ActivityDTO> actsDto =  actSrv.listActivity();
		return new ResponseEntity<>(actsDto, HttpStatus.OK);
	}

    @GetMapping("/{id}")
    public ResponseEntity<?> getActivity(@PathVariable("id") Long activityDtoId) {
		logger.info("Get One Activity");
		ActivityDTO actDto =  actSrv.getActivity(activityDtoId);
		return new ResponseEntity<>(actDto, HttpStatus.OK);
	}

    @PostMapping()
    public ResponseEntity<?> createActivity(@RequestBody ActivityDTO actDto) {
		logger.info("Create Activity");
		ActivityDTO newActDto =  actSrv.createActivity(actDto);
		return new ResponseEntity<>(newActDto, HttpStatus.OK);
	}

    @PutMapping()
    public ResponseEntity<?> updateActivity(@RequestBody ActivityDTO actDto) {
		logger.info("Update Activity");
		ActivityDTO updateActDto =  actSrv.updateActivity(actDto);
		return new ResponseEntity<>(updateActDto, HttpStatus.OK);
	}

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable("id") Long activityDtoId) {
		logger.info("Delete Activity");
		ActivityDTO actDto =  actSrv.getActivity(activityDtoId);
		return new ResponseEntity<>(actDto, HttpStatus.OK);
	}

	@GetMapping("/balance")
    public ResponseEntity<?> getbalance() {
		logger.info("Get Balance");
		float balance=  actSrv.balance();
		return new ResponseEntity<>(balance, HttpStatus.OK);
	}

    
}
