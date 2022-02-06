package com.acehome.entities.task;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity()
@Table(name="tasks")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Task{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
  
    @Column()
    private String title;
    
    @Column()
    private String comment;

    @Column()
    private TaskPriority priority;

    @Column()
    private TaskStatus status;

    @Column()
    private String startDate;

    @Column(columnDefinition = "integer default 100")
    private Integer progress;

    @Column()
    private boolean isDeleted;
}
