package com.sucram.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sucram.dsvendas.dto.SaleSuccessDTO;
import com.sucram.dsvendas.dto.SaleSumDTO;
import com.sucram.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

	@Query("SELECT new com.sucram.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM com.sucram.dsvendas.entities.Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.sucram.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM com.sucram.dsvendas.entities.Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successtGroupedBySeller();

}
