package com.acehome.repositories.bank;

import java.util.List;

import com.acehome.entities.bank.Bank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long> {
    List<Bank> findAllByIsDeletedFalseOrderByNameAsc();
}
