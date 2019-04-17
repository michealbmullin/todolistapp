package com.qa.application.controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.qa.repository.ToDoRepository;

@RestController
@RequestMapping("api/v1/")

public class ToDoController {
	@Autowired
	private ToDoRepository toDoRepository;

}
