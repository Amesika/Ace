package com.acehome.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MDsDTO extends DsDTO {

    private int month;

    public MDsDTO(int i, int source, int depense) {
        this.month = i;
        this.setSource((float) source);
        this.setDepense((float) depense);
    }

    public MDsDTO(int _month, float source, float depense) {
        this.month = _month;
        this.setSource(source);
        this.setDepense(depense);
    }
}
