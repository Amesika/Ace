package com.acehome.controllers.task;

import java.util.List;

import com.acehome.model.task.TaskDto;
import com.acehome.services.task.TaskService;

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

import io.swagger.annotations.Api;

@Controller
@CrossOrigin(origins = "*")
@Api(description = " ", tags = {"Les Tâches"})
@RequestMapping("tasks")
public class TaskController {

    @Autowired
    TaskService taskSrv;

    private static Logger logger = LogManager.getLogger(TaskController.class);

    @GetMapping()
    public ResponseEntity<?> getTasks() {
        logger.info("Get all active tasks");
        List<TaskDto> tasksDto = taskSrv.list();
        return new ResponseEntity<>(tasksDto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTask(@PathVariable("id") Long id) {
        logger.info("Get one task");
        TaskDto taskDto = taskSrv.get(id);
        return new ResponseEntity<>(taskDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createActivity(@RequestBody TaskDto taskDto) {
        logger.info("Create task");
        logger.info(taskDto);
        TaskDto newActDto = taskSrv.add(taskDto);
        return new ResponseEntity<>(newActDto, HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateActivity(@RequestBody TaskDto taskDto) {
        logger.info("Update task");
        TaskDto updateActDto = taskSrv.update(taskDto);
        return new ResponseEntity<>(updateActDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable("id") Long id) {
        logger.info("Delete task");
        boolean result = taskSrv.delete(id);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
