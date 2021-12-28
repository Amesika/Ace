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
