package com.acehome;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import com.acehome.entities.Activity;
import com.acehome.mapper.ActivityMapper;
import com.acehome.model.ActivityDTO;
import com.acehome.repositories.ActivityRepository;
import com.acehome.services.ActivityService;

import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ActivityServiceTest {

   

    @Autowired
    ActivityRepository actRep; 
    
    @Autowired
    ActivityService actSrv;

    // Test balance
    @Test
    void getBalanceTest() {

        float expectedBalance, actualBalance;
        expectedBalance = -77185;

        actualBalance = actSrv.balance();
        assertEquals(expectedBalance, actualBalance);
    }

    // Test List
    @Test
    void getListTest() {
        List<ActivityDTO> activities;
        activities = actSrv.listActivity();
        assertNotNull(activities.size());
    }

    // Test List Between Two Date
    @Test
    void getListBetweenTwoDateTest() {
        List<ActivityDTO> activities;
        activities = actSrv.listActivity("2020-01-01","2020-12-31");
        int expectedSize =  2;
        assertEquals(expectedSize,activities.size());
    }

    
    // Test List Between Two Date
    @Test
    void getListBetweenTwoDateByTypeTest() {
        List<ActivityDTO> activities;
        activities = actSrv.listActivityType("2020-01-01","2020-12-31","depense");
        int expectedSize =  1;
        assertEquals(expectedSize,activities.size());
    }

    // Create Activity
    @Test
    void createActivityTest() {

        ActivityDTO expectedActDto = new ActivityDTO();
        ActivityDTO actualActDto = new ActivityDTO();

        expectedActDto = new ActivityDTO();
        expectedActDto.setAmount((float)0);
        expectedActDto.setDescription("description");
        expectedActDto.setNote("vjouboerhbo qhrmfoqh oihqbfoze quhzfioubez bqzieuohz");
        expectedActDto.set_date("2021-12-19");
        expectedActDto.set_type("depense");

        actualActDto = actSrv.createActivity(expectedActDto);

        assertNotNull( actualActDto.getId());
        assertEquals(expectedActDto.getAmount(),actualActDto.getAmount());
        assertEquals( expectedActDto.getDescription(),actualActDto.getDescription());
        assertEquals( expectedActDto.getNote(),actualActDto.getNote());
        assertEquals(expectedActDto.get_date(),actualActDto.get_date() );
        assertEquals( expectedActDto.get_type(),actualActDto.get_type());

    }

    // Update Activity
    @Test
    void updateActivityTest(){

        ActivityDTO expectedActDto = new ActivityDTO();
        ActivityDTO actualActDto = new ActivityDTO();
        ActivityMapper mapper= Mappers.getMapper(ActivityMapper.class);

        if(!actRep.existsByDescription("descriptionToUpdate")){
           expectedActDto = new ActivityDTO();
            expectedActDto.setAmount((float)0);
            expectedActDto.setDescription("descriptionToUpdate");
            expectedActDto.setNote("vjouboerhbo qhrmfoqh oihqbfoze quhzfioubez bqzieuohz");
            expectedActDto.set_date("2021-12-19");
            expectedActDto.set_type("depense");
            expectedActDto = mapper.activityToDto(
                actRep.saveAndFlush(
                    mapper.dtoToActivity(expectedActDto))) ;
        }else{
            expectedActDto = mapper.activityToDto(
                actRep.getByDescription("descriptionToUpdate")) ;
        }

        expectedActDto.setDescription("descriptionToUpdate2");
        expectedActDto.setNote("Rose");
        expectedActDto.set_date("2222-12-19");
        expectedActDto.set_type("source");
        

        actualActDto = actSrv.updateActivity(expectedActDto);

        assertEquals(actualActDto.getAmount(), expectedActDto.getAmount());
        assertEquals(actualActDto.getDescription(), expectedActDto.getDescription());
        assertEquals(actualActDto.getId(), expectedActDto.getId());
        assertEquals(actualActDto.getNote(), expectedActDto.getNote());
        assertEquals(actualActDto.get_date(), expectedActDto.get_date());
        assertEquals(actualActDto.get_type(), expectedActDto.get_type());
    }


    // get Activity
    @Test
    void getActivityTest(){

        ActivityDTO expectedActDto = new ActivityDTO();
        ActivityDTO actualActDto = new ActivityDTO();
        ActivityMapper mapper= Mappers.getMapper(ActivityMapper.class);

        if(!actRep.existsByDescription("getActivityTest")){
           expectedActDto = new ActivityDTO();
            expectedActDto.setAmount((float)0);
            expectedActDto.setDescription("getActivityTest");
            expectedActDto.setNote("vjouboerhbo qhrmfoqh oihqbfoze quhzfioubez bqzieuohz");
            expectedActDto.set_date("2021-12-19");
            expectedActDto.set_type("depense");
            expectedActDto = mapper.activityToDto(
                actRep.saveAndFlush(
                    mapper.dtoToActivity(expectedActDto))) ;
        }else{
            expectedActDto = mapper.activityToDto(
                actRep.getByDescription("getActivityTest")) ;
        }        

        actualActDto = actSrv.getActivity(expectedActDto.getId());

        assertEquals(actualActDto.getAmount(), expectedActDto.getAmount());
        assertEquals(actualActDto.getDescription(), expectedActDto.getDescription());
        assertEquals(actualActDto.getId(), expectedActDto.getId());
        assertEquals(actualActDto.getNote(), expectedActDto.getNote());
        assertEquals(actualActDto.get_date(), expectedActDto.get_date());
        assertEquals(actualActDto.get_type(), expectedActDto.get_type());
    }


    // Delete Activity
    @Test
    void deleteActivityTest() {

        ActivityDTO expectedActDto = new ActivityDTO();
        Activity actualAct = new Activity();  
        ActivityMapper mapper= Mappers.getMapper(ActivityMapper.class);

        if(!actRep.existsByDescription("descriptionToDelete")){
           expectedActDto = new ActivityDTO();
            expectedActDto.setAmount((float)0);
            expectedActDto.setDescription("descriptionToDelete");
            expectedActDto.setNote("vjouboerhbo qhrmfoqh oihqbfoze quhzfioubez bqzieuohz");
            expectedActDto.set_date("2021-12-19");
            expectedActDto.set_type("depense");
            expectedActDto = mapper.activityToDto(
                actRep.saveAndFlush(
                    mapper.dtoToActivity(expectedActDto))) ;
        }else{
            expectedActDto = mapper.activityToDto(
                actRep.getByDescription("descriptionToDelete")) ;
        }

        assertEquals(actualAct.getAmount(), expectedActDto.getAmount());
        assertEquals(actualAct.getDescription(), expectedActDto.getDescription());
        assertEquals(actualAct.getId(), expectedActDto.getId());
        assertEquals(actualAct.getNote(), expectedActDto.getNote());
        assertEquals(actualAct.get_date(), expectedActDto.get_date());
        assertEquals(actualAct.get_type(), expectedActDto.get_type());
        assertTrue(actualAct.get_delete());
    }
}
