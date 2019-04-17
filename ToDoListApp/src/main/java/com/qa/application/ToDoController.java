package com.qa.application;

import java.util.List;

//import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/")

public class ToDoController {
	@Autowired
	private ToDoRepository toDoRepository;
	
	@RequestMapping(value = "toDos", method = RequestMethod.GET)
    public List<ToDos> list(){
        return toDoRepository.findAll();
	}
	@RequestMapping(value = "toDos/{task_id}", method = RequestMethod.GET)
    public ToDos get(@PathVariable Long task_id){
        return toDoRepository.findOne(task_id);
	}
	@RequestMapping(value = "toDos", method = RequestMethod.POST)
    public ToDos create(@RequestBody ToDos todos){
        return toDoRepository.saveAndFlush(todos);
	}
}
