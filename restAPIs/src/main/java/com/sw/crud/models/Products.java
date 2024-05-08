package com.sw.crud.models;

import org.hibernate.annotations.TenantId;
import org.springframework.web.bind.annotation.SessionAttributes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "products")
public class Products {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Author_name")
    private String Author_name;

    @Column(name = "Book_name")
    private String Book_name;

    @Column(name = "Description")
    private String Description;

    @Column(name = "Price")
    private long Price;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
   
    public String getAuthor_name() {
        return Author_name;
    }
    public void setAuthor_name(String Author_name) {
        this.Author_name = Author_name;
    }
    public String getBook_name() {
        return Book_name;
    }
    public void setBook_name(String Book_name) {
        this.Book_name = Book_name;
    }
    public String getDescription() {
        return Description;
    }
    public void setDescription(String Description) {
        this.Description = Description;
    }
    public long getPrice() {
        return Price;
    }
    public void setPrice(long Price) {
        this.Price = Price;
    }
    
}
