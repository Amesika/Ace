package com.acehome.repositories.signal;

import java.util.List;

import com.acehome.entities.signal.Signal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SignalRepository extends JpaRepository<Signal, Long> {
    
    @Query(value = "SELECT * From signal WHERE _delete=false Order By name asc", nativeQuery = true)
    List<Signal> getAllSignal();
}
