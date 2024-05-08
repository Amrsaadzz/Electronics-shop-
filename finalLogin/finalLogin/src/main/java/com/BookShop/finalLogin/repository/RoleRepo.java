package com.BookShop.finalLogin.repository;

import com.BookShop.finalLogin.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;
@Component
public interface RoleRepo extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(String name);

}
