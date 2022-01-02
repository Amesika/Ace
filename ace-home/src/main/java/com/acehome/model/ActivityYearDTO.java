package com.acehome.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActivityYearDTO {

    private float year;
    private List<MDsDTO> mds; 
    private DsDTO total;
}
