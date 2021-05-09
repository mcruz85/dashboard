package com.sucram.dsvendas.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.sucram.dsvendas.entities.Seller;

import lombok.Data;

@Data
public class SaleSumDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Double sum;
	
	public SaleSumDTO(Seller seller, Double sum) {
		this.sellerName = seller.getName();
		this.sum = sum;
	}
	
	
}
