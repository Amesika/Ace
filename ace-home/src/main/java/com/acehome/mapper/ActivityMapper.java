package com.acehome.mapper;

import java.util.List;

import com.acehome.entities.Activity;
import com.acehome.model.ActivityDTO;

import org.mapstruct.Mapper;

@Mapper
public interface ActivityMapper {

    Activity dtoToActivity(ActivityDTO activityDto);

    ActivityDTO activityToDto(Activity activity);

    List<ActivityDTO> map(List<Activity> activities);
}
