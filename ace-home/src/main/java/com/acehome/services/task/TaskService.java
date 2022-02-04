package com.acehome.services.task;

import java.util.List;

import com.acehome.entities.task.Task;
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

    private TaskMapper mapper = Mappers.getMapper(TaskMapper.class);

    public List<TaskDto> list() {
        return mapper.map(taskRepo.findAllByIsDeletedFalse());
    }

    public TaskDto add(TaskDto taskDto) {
        Task task = mapper.dtoToTask(taskDto);
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
