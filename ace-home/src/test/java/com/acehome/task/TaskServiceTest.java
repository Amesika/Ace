package com.acehome.task;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.acehome.entities.task.TaskPriority;
import com.acehome.entities.task.TaskStatus;
import com.acehome.model.task.TaskDto;
import com.acehome.services.task.TaskService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class TaskServiceTest {

    @Autowired
    TaskService taskSrv;

    // Crud

    // ** Add Task */
    @Test
    void addTaskTest() {
        String title = "New Task";
        String comment = "Task Comment";
        TaskStatus status = TaskStatus.A_FAIR;
        TaskPriority priority = TaskPriority.NORMAL;

        TaskDto taskDto = new TaskDto();
        TaskDto taskDtoActual = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);

        taskDtoActual = taskSrv.add(taskDto);

        assertNotNull(taskDtoActual.getId());
        assertEquals(title, taskDtoActual.getTitle());
        assertEquals(comment, taskDtoActual.getComment());
        assertEquals(priority, taskDtoActual.getPriority());
    }

    // ** Update Task */
    @Test
    void updateTaskTest() {

        String title = "New Task To Update";
        String comment = "Task Comment To Update";
        TaskStatus status = TaskStatus.A_FAIR;
        TaskPriority priority = TaskPriority.NORMAL;

        TaskDto taskDto = new TaskDto();
        TaskDto taskDtoActual = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);

        // ADD
        taskDto = taskSrv.add(taskDto);

        title = "Task Update";
        comment = "Task Comment Update";
        priority = TaskPriority.IMPORTENT;

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);

        // UPDATE
        taskDtoActual = taskSrv.update(taskDto);

        assertEquals(taskDto.getId(),taskDtoActual.getId() );
        assertEquals(title, taskDtoActual.getTitle());
        assertEquals(comment, taskDtoActual.getComment());
        assertEquals(priority, taskDtoActual.getPriority());
    }

    // ** Remove Task */
    @Test
    void removeTaskTest() {

        String title = "New Task To Delete";
        String comment = "Task Comment To Delete";
        TaskStatus status = TaskStatus.A_FAIR;
        TaskPriority priority = TaskPriority.NORMAL;
        boolean isDeleted = true;
        boolean isDeletedActual;

        TaskDto taskDto = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);

        // ADD
        taskDto = taskSrv.add(taskDto);
        

        // Delete
        isDeletedActual = taskSrv.delete(taskDto.getId());

        assertEquals(isDeleted, isDeletedActual);
    }

    // ** Get Task */
    @Test
    void getTaskTest() {

        String title = "New Task To Get";
        String comment = "Task Comment To Get";
        TaskStatus status = TaskStatus.A_FAIR;
        TaskPriority priority = TaskPriority.NORMAL;

        TaskDto taskDto = new TaskDto();
        TaskDto taskDtoActual = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);

        // ADD
        taskDto = taskSrv.add(taskDto);

        // GET
        taskDtoActual = taskSrv.get(taskDto.getId());

        assertEquals(taskDto.getId(),taskDtoActual.getId());
        assertEquals(title, taskDtoActual.getTitle());
        assertEquals(comment, taskDtoActual.getComment());
        assertEquals(priority, taskDtoActual.getPriority());
    }

    // ** Get Task List */
    @Test
    void getTasksTest() {

        taskSrv.reset();

        int nbrExpected = 250;

        int nbrActual = 0;

        for (int i = 0; i < nbrExpected; i++) {

            String title = "New Task Index "+i;
            String comment = "Task Comment Index "+i;
            TaskStatus status = TaskStatus.A_FAIR;
            TaskPriority priority = TaskPriority.NORMAL;
           
            TaskDto taskDto = new TaskDto();

            taskDto.setTitle(title);
            taskDto.setComment(comment);
            taskDto.setPriority(priority);
            taskDto.setStatus(status);
            taskSrv.add(taskDto);
        }
        
        // Get List
        nbrActual = taskSrv.list().size();

        assertEquals(nbrExpected, nbrActual);
    }
}
