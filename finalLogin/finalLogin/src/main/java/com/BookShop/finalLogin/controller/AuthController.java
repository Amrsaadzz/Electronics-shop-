package com.BookShop.finalLogin.controller;

import com.BookShop.finalLogin.dto.LoginDto;
import com.BookShop.finalLogin.dto.SignUpDto;
import com.BookShop.finalLogin.entity.Role;
import com.BookShop.finalLogin.entity.User;
import com.BookShop.finalLogin.repository.RoleRepo;
import com.BookShop.finalLogin.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private RoleRepo rolerepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")  // http://localhost:8080/api/auth/signin
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsername(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("User signed-in successfully!", HttpStatus.OK);
    }

    @PostMapping("/signup")   // http://localhost:8080/api/auth/signup
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto){
        if(userRepo.existsByUsername(signUpDto.getUsername())){
            return new ResponseEntity<>("Username already exists!", HttpStatus.BAD_REQUEST);
        }

        if(userRepo.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email already exists!", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setUsername(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));

        Role roles=rolerepo.findByName("ROLE_USER").get();
        user.setRoles(Collections.singleton(roles));

        userRepo.save(user);
        return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);

    }

}
