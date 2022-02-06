package com.acehome.model.task;

import com.acehome.entities.task.TaskPriority;
import com.acehome.entities.task.TaskStatus;

import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TaskDto {
    
    private Long id;
    private String title;
    private String comment;
    private TaskStatus status;
    private TaskPriority priority;
    private String startDate;
    private int progress;

}
