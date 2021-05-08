package com.sucram.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sucram.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
