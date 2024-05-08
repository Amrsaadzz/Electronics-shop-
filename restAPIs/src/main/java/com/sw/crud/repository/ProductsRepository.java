package com.sw.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sw.crud.models.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

}