package com.acehome;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import com.acehome.entities.Debt;
import com.acehome.mapper.DebtMapper;
import com.acehome.model.DebtDTO;
import com.acehome.repositories.DebtRepository;
import com.acehome.services.DebtService;

import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DebtServiceTest {

   

    @Autowired
    DebtRepository debtRep; 
    
    @Autowired
    DebtService debtSrv;

    // Test balance
    @Test
    void getBalanceTest() {

        float expectedBalance, actualBalance;
        expectedBalance =  733968;

        actualBalance = debtSrv.balance();
        assertEquals(expectedBalance, actualBalance);
    }

    // Test List
    @Test
    void getListTest() {
        List<DebtDTO> debts;
        debts = debtSrv.listDebt();
        assertNotNull(debts.size());
    }

    // Create Debt
    @Test
    void createDebtTest() {

        DebtDTO expectedDebtDto = new DebtDTO();
        DebtDTO actualDebtDto = new DebtDTO();

        expectedDebtDto = new DebtDTO();
        expectedDebtDto.setName("Create Debt");
        expectedDebtDto.setDescription("description");
        expectedDebtDto.setCreditorName("createDebtTest");
        expectedDebtDto.setInitAmount(5000);
        expectedDebtDto.setCurrentAmount(0);
        expectedDebtDto.setPaymentAmount(1000);
        expectedDebtDto.setRate(10);

        actualDebtDto = debtSrv.createDebt(expectedDebtDto);

        assertNotNull(actualDebtDto.getId());
        assertEquals(expectedDebtDto.getName(),actualDebtDto.getName());
        assertEquals( expectedDebtDto.getDescription(),actualDebtDto.getDescription());
        assertEquals( expectedDebtDto.getCreditorName(),actualDebtDto.getCreditorName());
        assertEquals(expectedDebtDto.getInitAmount(),actualDebtDto.getInitAmount());
        assertEquals( expectedDebtDto.getCurrentAmount(),actualDebtDto.getCurrentAmount());
        assertEquals( expectedDebtDto.getPaymentAmount(),actualDebtDto.getPaymentAmount());
        assertEquals( expectedDebtDto.getRate(),actualDebtDto.getRate());

    }

    // Update Debt
    @Test
    void updateDebtTest(){

        DebtDTO expectedDebtDto = new DebtDTO();
        DebtDTO actualDebtDto = new DebtDTO();
        DebtMapper mapper= Mappers.getMapper(DebtMapper.class);

        if(!debtRep.existsByName("Update Debt")){
           expectedDebtDto = new DebtDTO();
           expectedDebtDto.setName("Update Debt");
           expectedDebtDto.setDescription("description");
           expectedDebtDto.setCreditorName("updateDebtTest");
           expectedDebtDto.setInitAmount(5000);
           expectedDebtDto.setCurrentAmount(0);
           expectedDebtDto.setPaymentAmount(1000);
           expectedDebtDto.setRate(10);
            expectedDebtDto = mapper.debtToDto(
                debtRep.saveAndFlush(
                    mapper.dtoToDebt(expectedDebtDto))) ;
        }else{
            expectedDebtDto = mapper.debtToDto(
                debtRep.getByName("Update Debt")) ;
        }

        expectedDebtDto.setDescription("descriptionToUpdate2");
        expectedDebtDto.setDescription("description update");
        expectedDebtDto.setCreditorName("updateDebtTest update");
        expectedDebtDto.setInitAmount(50000);
        expectedDebtDto.setCurrentAmount(0);
        expectedDebtDto.setPaymentAmount(7000);
        expectedDebtDto.setRate(20);
        

        actualDebtDto = debtSrv.updateDebt(expectedDebtDto);

        assertEquals(expectedDebtDto.getName(),actualDebtDto.getName());
        assertEquals( expectedDebtDto.getDescription(),actualDebtDto.getDescription());
        assertEquals( expectedDebtDto.getCreditorName(),actualDebtDto.getCreditorName());
        assertEquals(expectedDebtDto.getInitAmount(),actualDebtDto.getInitAmount());
        assertEquals( expectedDebtDto.getCurrentAmount(),actualDebtDto.getCurrentAmount());
        assertEquals( expectedDebtDto.getPaymentAmount(),actualDebtDto.getPaymentAmount());
        assertEquals( expectedDebtDto.getRate(),actualDebtDto.getRate());

    }


    // get Debt
    @Test
    void getDebtTest(){

        DebtDTO expectedDebtDto = new DebtDTO();
        DebtDTO actualDebtDto = new DebtDTO();
        DebtMapper mapper= Mappers.getMapper(DebtMapper.class);

        if(!debtRep.existsByName("Get Debt")){
            expectedDebtDto = new DebtDTO();
            expectedDebtDto.setName("Get Debt");
            expectedDebtDto.setDescription("description");
            expectedDebtDto.setCreditorName("getDebtTest");
            expectedDebtDto.setInitAmount(5000);
            expectedDebtDto.setCurrentAmount(0);
            expectedDebtDto.setPaymentAmount(1000);
            expectedDebtDto.setRate(10);
             expectedDebtDto = mapper.debtToDto(
                 debtRep.saveAndFlush(
                     mapper.dtoToDebt(expectedDebtDto))) ;
         }else{
             expectedDebtDto = mapper.debtToDto(
                 debtRep.getByName("Get Debt")) ;
         }       

        actualDebtDto = debtSrv.getDebt(expectedDebtDto.getId());

        assertEquals(expectedDebtDto.getName(),actualDebtDto.getName());
        assertEquals( expectedDebtDto.getDescription(),actualDebtDto.getDescription());
        assertEquals( expectedDebtDto.getCreditorName(),actualDebtDto.getCreditorName());
        assertEquals(expectedDebtDto.getInitAmount(),actualDebtDto.getInitAmount());
        assertEquals( expectedDebtDto.getCurrentAmount(),actualDebtDto.getCurrentAmount());
        assertEquals( expectedDebtDto.getPaymentAmount(),actualDebtDto.getPaymentAmount());
        assertEquals( expectedDebtDto.getRate(),actualDebtDto.getRate());
    }


    // Delete Debt
    @Test
    void deleteDebtTest() {

        DebtDTO expectedDebtDto = new DebtDTO();
        Debt actualDebt = new Debt();  
        DebtMapper mapper= Mappers.getMapper(DebtMapper.class);

        if(!debtRep.existsByName("Delete Debt")){
            expectedDebtDto = new DebtDTO();
            expectedDebtDto.setName("Delete Debt");
            expectedDebtDto.setDescription("description");
            expectedDebtDto.setCreditorName("getDebtTest");
            expectedDebtDto.setInitAmount(5000);
            expectedDebtDto.setCurrentAmount(0);
            expectedDebtDto.setPaymentAmount(1000);
            expectedDebtDto.setRate(10);
             expectedDebtDto = mapper.debtToDto(
                 debtRep.saveAndFlush(
                     mapper.dtoToDebt(expectedDebtDto))) ;
         }else{
             expectedDebtDto = mapper.debtToDto(
                 debtRep.getByName("Delete Debt")) ;
         }    

        actualDebt = debtSrv.deleteDebt(expectedDebtDto.getId());

        assertEquals(expectedDebtDto.getName(),actualDebt.getName());
        assertEquals( expectedDebtDto.getDescription(),actualDebt.getDescription());
        assertEquals( expectedDebtDto.getCreditorName(),actualDebt.getCreditorName());
        assertEquals(expectedDebtDto.getInitAmount(),actualDebt.getInitAmount());
        assertEquals( expectedDebtDto.getCurrentAmount(),actualDebt.getCurrentAmount());
        assertEquals( expectedDebtDto.getPaymentAmount(),actualDebt.getPaymentAmount());
        assertTrue(actualDebt.get_delete());
    }
}
