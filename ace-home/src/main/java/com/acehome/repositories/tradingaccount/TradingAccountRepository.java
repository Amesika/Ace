package com.acehome.repositories.tradingaccount;

import java.util.List;

import com.acehome.entities.activity.Activity;
import com.acehome.entities.tradingaccount.TradingAccount;
import com.acehome.model.tradingaccount.TradingAccountSoldDto;
import com.acehome.model.tradingaccount.TradingAccountStateDto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TradingAccountRepository extends JpaRepository<TradingAccount, Long> {
    
    @Query(value = "SELECT * From traccount WHERE _delete=false Order By name asc", nativeQuery = true)
    List<TradingAccount> getAllTradingAccount();

    @Query(value = "SELECT sum(sold) as sold From get_trading_acc_with_sold()", nativeQuery = true)
    double getAllTradingAccountSold();

    @Query(value = "SELECT * From get_trading_acc_with_sold()", nativeQuery = true)
    List<TradingAccountSoldDto> getAllTradingAccountSoldDetails();

    @Query(value = "SELECT * From get_activity_state()", nativeQuery = true)
    List<TradingAccountStateDto> getAllTradingAccountState();

    @Query(value = "SELECT * From get_activity_state_by_tracc(:accId)", nativeQuery = true)
    List<TradingAccountStateDto> getTradingAccountState(@Param("accId") Long id);

    @Query(value = "SELECT * FROM activity WHERE traccount_id=:id AND _delete=false", nativeQuery = true)
    List<Activity> getActivities(@Param("id") Long id);
}

