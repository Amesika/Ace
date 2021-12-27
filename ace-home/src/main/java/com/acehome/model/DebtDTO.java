package com.acehome.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DebtDTO {
    private Long id;
    private String name;
    private String description;
    private String creditorName;
    private float initAmount;
    private float currentAmount;
    private float paymentAmount;
    private float rate;
}
