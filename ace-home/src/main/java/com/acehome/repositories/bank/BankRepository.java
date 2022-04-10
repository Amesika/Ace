package com.acehome.repositories.bank;

import java.util.List;

import com.acehome.entities.bank.Bank;
import com.acehome.model.bank.BankSoldDto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long> {
    List<Bank> findAllByIsDeletedFalseOrderByNameAsc();

    @Query(value = "SELECT * FROM get_banks_with_sold()", nativeQuery = true)
    List<BankSoldDto> findAllBankWithSold();

    @Query(value = "SELECT SUM(sold) FROM get_banks_with_sold()", nativeQuery = true)
    double totalSold();
}
