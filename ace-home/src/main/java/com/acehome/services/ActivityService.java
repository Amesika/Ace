package com.acehome.services;

import java.util.List;

import com.acehome.entities.Activity;
import com.acehome.mapper.ActivityMapper;
import com.acehome.model.ActivityDTO;
import com.acehome.repositories.ActivityRepository;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {

    @Autowired
    ActivityRepository actRepo;

    private ActivityMapper mapper= Mappers.getMapper(ActivityMapper.class);

    // Create activity
    public ActivityDTO createActivity(ActivityDTO activityDto){

        Activity act  = mapper.dtoToActivity(activityDto);
        ActivityDTO newAct;
        act = actRepo.saveAndFlush(act);
        newAct  = mapper.activityToDto(act);
        return newAct;
    }

    // Update Activity
    public ActivityDTO updateActivity(ActivityDTO activityDto){
       
        Activity act  = mapper.dtoToActivity(activityDto);
        ActivityDTO updateAct;
        act = actRepo.saveAndFlush(act);
        updateAct  = mapper.activityToDto(act);
        return updateAct;
    }


    // Get Activity
    public ActivityDTO getActivity(Long activityDtoId){

        ActivityDTO getAct;
        Activity act;
        act = actRepo.findById(activityDtoId).get();
        getAct  = mapper.activityToDto(act);
        return getAct;
    }


    // Delete Activity
    public Activity deleteActivity(Long activityDtoId){

        Activity act;
        act = actRepo.findById(activityDtoId).get();
        act.set_delete(true);
        act = actRepo.saveAndFlush(act);

        return act;
    }

    // Liste Activity
    public List<ActivityDTO> listActivity(){

        List<ActivityDTO> activities;
        List<Activity> list;
        //list = actRepo.findAll();
        list = actRepo.getActivities();
        activities = mapper.map(list);
        return activities;
    }

    // Liste Activity between two date
    public List<ActivityDTO> listActivity(String startDate,String endDate){

        List<ActivityDTO> activities;
        List<Activity> list;
        //list = actRepo.findAll();
        list = actRepo.getActivities(startDate,endDate);
        activities = mapper.map(list);
        return activities;
    }

    // get balance
    public float balance(){

        return (float)actRepo.getBalance() ;
    }

    
    
}
