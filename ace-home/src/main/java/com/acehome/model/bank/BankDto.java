package com.acehome.model.bank;

import java.util.Set;

import com.acehome.entities.Activity;

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
public class BankDto {

    private Long id;
    private String name;
    private String number;
    private String description;

}
