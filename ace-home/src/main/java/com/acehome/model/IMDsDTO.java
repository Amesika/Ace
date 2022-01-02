package com.acehome.model;


public interface IMDsDTO {
    
    public int get_month();
    public float getSource();
    public float getDepense();

    public default String gString(){
       String msg = "Month : "+get_month()+" - Source : "+getSource()+" - Depense : "+getDepense();
       return msg;
    }
}
