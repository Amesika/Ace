package com.acehome.repositories;

import java.util.List;

import com.acehome.entities.activity.Activity;
import com.acehome.model.IMDsDTO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    boolean existsByDescription(String string);

    Activity getByDescription(String string);

    @Query(value = "SELECT get_balance()", nativeQuery = true)
    float getBalance();

    @Query(value = "SELECT * From activity WHERE _delete=false Order By _date desc", nativeQuery = true)
    List<Activity> getActivities();

    @Query(value = "SELECT * From activity WHERE _delete=false AND _date BETWEEN :startDate AND :endDate AND _delete = false Order By _date desc", nativeQuery = true)
    List<Activity> getActivities(
            @Param("startDate") String startDate,
            @Param("endDate") String endDate);

    @Query(value = "SELECT * From activity WHERE _delete=false AND _date BETWEEN :startDate AND :endDate AND _type = :type AND _delete = false Order By _date desc", nativeQuery = true)
    List<Activity> getActivitiesByType(
        @Param("startDate") String startDate, 
        @Param("endDate") String endDate, 
        @Param("type") String type);

    @Query(value = "SELECT * From get_activity_years()", nativeQuery = true)
    List<Float> getActivitiesYears();

    @Query(value = "SELECT * From get_activity_months(:year)", nativeQuery = true)
    List<IMDsDTO> getActivitiesMonths(@Param("year") float year);
    

}
