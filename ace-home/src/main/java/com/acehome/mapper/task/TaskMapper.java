package com.acehome.mapper.task;

import java.util.List;

import com.acehome.entities.task.Task;
import com.acehome.model.task.TaskDto;

import org.mapstruct.Mapper;

@Mapper
public interface TaskMapper {

    Task dtoToTask(TaskDto taskDto);

    TaskDto taskToDto(Task task);

    List<TaskDto> map(List<Task> tasks);
}
