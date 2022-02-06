package com.acehome.task;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

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

    Calendar cal = Calendar.getInstance(new Locale("fr"));  
    Date currentDate = cal.getTime();  
    SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
    String currentDateStr= format1.format(currentDate);     

    // Crud

    // ** Add Task */
    @Test
    void addTaskTest() {
        String title = "New Task";
        String comment = "Task Comment";
        TaskStatus status = TaskStatus.A_FAIRE;
        TaskPriority priority = TaskPriority.NORMAL;
        String startDate = currentDateStr;
        int progress = 50 ;

        TaskDto taskDto = new TaskDto();
        TaskDto taskDtoActual = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);
        taskDto.setStartDate(startDate);
        taskDto.setProgress(progress);

        taskDtoActual = taskSrv.add(taskDto);

        assertNotNull(taskDtoActual.getId());
        assertEquals(title, taskDtoActual.getTitle());
        assertEquals(comment, taskDtoActual.getComment());
        assertEquals(priority, taskDtoActual.getPriority());
        assertEquals(startDate, taskDtoActual.getStartDate());
        assertEquals(progress, taskDtoActual.getProgress());
    }

    // ** Update Task */
    @Test
    void updateTaskTest() {

        String title = "New Task To Update";
        String comment = "Task Comment To Update";
        TaskStatus status = TaskStatus.A_FAIRE;
        TaskPriority priority = TaskPriority.NORMAL;
        String startDate =  currentDateStr;
        int progress = 50 ;

        TaskDto taskDto = new TaskDto();
        TaskDto taskDtoActual = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);
        taskDto.setStartDate(startDate);
        taskDto.setProgress(progress);

        // ADD
        taskDto = taskSrv.add(taskDto);

        title = "Task Update";
        comment = "Task Comment Update";
        priority = TaskPriority.IMPORTENT;
        progress = 70 ;

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStartDate(startDate);
        taskDto.setProgress(progress);

        // UPDATE
        taskDtoActual = taskSrv.update(taskDto);

        assertEquals(taskDto.getId(),taskDtoActual.getId() );
        assertEquals(title, taskDtoActual.getTitle());
        assertEquals(comment, taskDtoActual.getComment());
        assertEquals(priority, taskDtoActual.getPriority());
        assertEquals(startDate, taskDtoActual.getStartDate());
        assertEquals(progress, taskDtoActual.getProgress());
    }

    // ** Remove Task */
    @Test
    void removeTaskTest() {

        String title = "New Task To Delete";
        String comment = "Task Comment To Delete";
        TaskStatus status = TaskStatus.A_FAIRE;
        TaskPriority priority = TaskPriority.NORMAL;
        String startDate =  currentDateStr;
        int progress = 50 ;

        boolean isDeleted = true;
        boolean isDeletedActual;

        TaskDto taskDto = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);
        taskDto.setStartDate(startDate);
        taskDto.setProgress(progress);

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
        TaskStatus status = TaskStatus.A_FAIRE;
        TaskPriority priority = TaskPriority.NORMAL;
        String startDate =  currentDateStr;
        int progress = 50 ;

        TaskDto taskDto = new TaskDto();
        TaskDto taskDtoActual = new TaskDto();

        taskDto.setTitle(title);
        taskDto.setComment(comment);
        taskDto.setPriority(priority);
        taskDto.setStatus(status);
        taskDto.setStartDate(startDate);
        taskDto.setProgress(progress);

        // ADD
        taskDto = taskSrv.add(taskDto);

        // GET
        taskDtoActual = taskSrv.get(taskDto.getId());

        assertEquals(taskDto.getId(),taskDtoActual.getId());
        assertEquals(title, taskDtoActual.getTitle());
        assertEquals(comment, taskDtoActual.getComment());
        assertEquals(priority, taskDtoActual.getPriority());
        assertEquals(startDate, taskDtoActual.getStartDate());
        assertEquals(progress, taskDtoActual.getProgress());
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
            TaskStatus status = TaskStatus.A_FAIRE;
            TaskPriority priority = TaskPriority.NORMAL;
            String startDate =  currentDateStr;
            int progress = 50 ;
           
            TaskDto taskDto = new TaskDto();

            taskDto.setTitle(title);
            taskDto.setComment(comment);
            taskDto.setPriority(priority);
            taskDto.setStatus(status);
            taskDto.setStartDate(startDate);
            taskDto.setProgress(progress);

            taskSrv.add(taskDto);
        }
        
        // Get List
        nbrActual = taskSrv.list().size();

        assertEquals(nbrExpected, nbrActual);
    }
}
