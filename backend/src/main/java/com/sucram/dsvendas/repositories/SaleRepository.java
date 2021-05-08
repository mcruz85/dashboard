package com.sucram.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sucram.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {


}
