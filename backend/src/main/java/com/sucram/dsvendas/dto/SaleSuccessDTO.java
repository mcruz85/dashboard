package com.sucram.dsvendas.dto;

import java.io.Serializable;

import com.sucram.dsvendas.entities.Seller;

import lombok.Data;

@Data
public class SaleSuccessDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Long visited;
	private Long deals;
	
	public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
		this.sellerName = seller.getName();
		this.visited = visited;
		this.deals = deals;
	}
	
	
}
