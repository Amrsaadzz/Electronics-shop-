package com.sw.crud.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.sw.crud.models.Products;
import com.sw.crud.services.ProductsService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @GetMapping
    public ResponseEntity<List<Products>> getAllProducts() {
        List<Products> products = productsService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Products> getProductsById(@PathVariable long id) {
        Products product = productsService.getProductsById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping
    public ResponseEntity<Products> saveProducts(@RequestBody Products products) {
        Products savedProduct = productsService.saveProducts(products);
        return ResponseEntity.ok(savedProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Products> updateProducts(@PathVariable long id, @RequestBody Products products) {
        Products updatedProduct = productsService.updateProducts(id, products);
        return ResponseEntity.ok(updatedProduct);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProducts(@PathVariable long id) {
        productsService.deleteProductsById(id);
        return ResponseEntity.ok().build();
    }
}
