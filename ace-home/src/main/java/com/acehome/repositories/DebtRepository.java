package com.acehome.repositories;

import java.util.List;

import com.acehome.entities.Debt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DebtRepository extends JpaRepository<Debt, Long> {

    boolean existsByName(String string);

    @Query(value = "SELECT SUM(current_amount) FROM debt WHERE _delete=false", nativeQuery = true)
    float getBalance();


    @Query(value = "SELECT * From debt WHERE  _delete=false Order By name", nativeQuery = true)
    List<Debt> getDebts();

    Debt getByName(String string);

}
