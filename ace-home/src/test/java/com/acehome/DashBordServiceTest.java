package com.acehome;

import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.List;


import com.acehome.model.ActivityYearDTO;
import com.acehome.model.DsDTO;
import com.acehome.model.MDsDTO;
import com.acehome.services.DashBordService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DashBordServiceTest {


    @Autowired
    DashBordService dashSrv;

    // Test Get Activity Years
    @Test
    void getActivityYears() {

        List<ActivityYearDTO> activityYears;
        int expectedActYearsSize = 4;
        int expectedActYear = 2021;
        MDsDTO expectedMDsDTO = new MDsDTO(12,24725,34114);
        DsDTO expectedTotal = new DsDTO(446440,478925);
        activityYears = dashSrv.activityTable();
        assertEquals(expectedActYearsSize, activityYears.size());
        assertEquals(expectedActYear, activityYears.get(1).getYear());
        assertEquals(expectedMDsDTO.getMonth(), activityYears.get(1).getMds().get(11).getMonth());
        assertEquals(expectedMDsDTO.getSource(), activityYears.get(1).getMds().get(11).getSource());
        assertEquals(expectedMDsDTO.getDepense(), activityYears.get(1).getMds().get(11).getDepense());
        assertEquals(expectedTotal.getSource(), activityYears.get(1).getTotal().getSource());
        assertEquals(expectedTotal.getDepense(), activityYears.get(1).getTotal().getDepense());
    }
}
