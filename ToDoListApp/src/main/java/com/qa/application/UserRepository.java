package com.qa.application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository< User, Long>{
User findByEmail(String email, String password);

List<User> findByEmailAndPassword(List<String> email);
}
