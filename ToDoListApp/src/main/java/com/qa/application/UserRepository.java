package com.qa.application;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
User findByEmail(String email);

List<User> findByEmailAndPassword(String email, String password);
}
