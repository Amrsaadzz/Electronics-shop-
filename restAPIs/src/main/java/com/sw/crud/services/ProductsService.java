package com.sw.crud.services;

import java.util.List;
import java.util.Optional;

import com.sw.crud.models.Products;

public interface ProductsService {
    static List <Products> getAllproducts() {
        throw new UnsupportedOperationException("Unimplemented method 'getAllproducts'");
    }
    static void saveproducts(Products products) {
        throw new UnsupportedOperationException("Unimplemented method 'saveproducts'");
    }
    static Products getproductsById(long id) {
        throw new UnsupportedOperationException("Unimplemented method 'getproductsById'");
    }
    void deleteproductsById(long id);
    List<Products> findAll();
    void save(Products products);
    Optional<Products> findById(long iD);
    void deleteById(long id);
    Products saveProducts(Products products);
    Products getProductsById(long id);
    void deleteProductsById(long id);
    List<Products> getAllProducts();
    Products updateProducts(long id, Products products);
}
