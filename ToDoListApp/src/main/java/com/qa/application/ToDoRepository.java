package com.qa.application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDos , Long> {

	List<ToDos> findByUserId(Long userId);

}
