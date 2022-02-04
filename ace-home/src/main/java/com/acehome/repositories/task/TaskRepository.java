package com.acehome.repositories.task;

import java.util.List;

import com.acehome.entities.task.Task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findAllByIsDeletedFalse();
}
