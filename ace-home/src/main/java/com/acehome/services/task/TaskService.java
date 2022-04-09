package com.acehome.services.task;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.acehome.entities.task.Task;
import com.acehome.entities.task.TaskStatus;
import com.acehome.mapper.task.TaskMapper;
import com.acehome.model.task.TaskDto;
import com.acehome.repositories.task.TaskRepository;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepo;

    Calendar cal = Calendar.getInstance(new Locale("fr"));  
    Date currentDate = cal.getTime();  
    SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
    String currentDateStr= format1.format(currentDate);     

    private TaskMapper mapper = Mappers.getMapper(TaskMapper.class);

    public List<TaskDto> list() {
        return mapper.map(taskRepo.findAllByIsDeletedFalse());
    }

    public TaskDto add(TaskDto taskDto) {
        Task task = mapper.dtoToTask(taskDto);
        task.setStatus(TaskStatus.A_FAIRE);
        task.setStartDate(currentDateStr);
        task = taskRepo.saveAndFlush(task);
        return mapper.taskToDto(task);
    }

    public TaskDto get(Long id) {
        Task task = taskRepo.findById(id).get();
        return mapper.taskToDto(task);
    }

    public boolean delete(Long id) {
        Task task = taskRepo.findById(id).get();
        task.setDeleted(true);
        task = taskRepo.saveAndFlush(task);
        return task.isDeleted();
    }

    public TaskDto update(TaskDto taskDto) {
        Task task = mapper.dtoToTask(taskDto);
        task = taskRepo.saveAndFlush(task);
        return mapper.taskToDto(task);
    }

    public void reset() {
        taskRepo.deleteAll();
    }
}
