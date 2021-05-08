package com.sucram.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sucram.dsvendas.dto.SellerDTO;
import com.sucram.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository sellerRepository;
	
	public List<SellerDTO> findAll() {
		return sellerRepository.findAll()
			.stream()
			.map(SellerDTO::new)
			.collect(Collectors.toList());				
	}
	
}
