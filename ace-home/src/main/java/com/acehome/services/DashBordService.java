package com.acehome.services;

import java.util.ArrayList;
import java.util.List;

import com.acehome.model.ActivityYearDTO;
import com.acehome.model.IMDsDTO;
import com.acehome.model.MDsDTO;
import com.acehome.repositories.ActivityRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashBordService {
    
    @Autowired
    ActivityRepository actRepo;

    // get activity table
    public List<ActivityYearDTO> activityTable(){

            // Liste de années
            List<Float> years = actRepo.getActivitiesYears();
            List<ActivityYearDTO> reps = new ArrayList<ActivityYearDTO>();
            for (float year : years) {
                ActivityYearDTO rep = new  ActivityYearDTO();
                MDsDTO total = new MDsDTO();
                // Recupper la liste des sources et des dépenses
                List<IMDsDTO> items = actRepo.getActivitiesMonths(year);
                List<MDsDTO> newitems = new ArrayList<MDsDTO>();
   
                for (IMDsDTO item : items) {
                    MDsDTO newitem = new  MDsDTO(item.get_month(),item.getSource(),item.getDepense());
                    newitems.add(newitem);
                    total.setSource(item.getSource()+total.getSource());
                    total.setDepense(item.getDepense()+total.getDepense());
                }
                rep.setTotal(total);
                rep.setYear(year);
                rep.setMds(newitems);
                reps.add(rep);
            }

            // Recupper la liste des sources et des dépenses

            return reps;
    }
}
