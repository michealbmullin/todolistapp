package com.qa.application;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import com.qa.models.ToDos;

@RestController
@RequestMapping("api/v1/")

public class ToDoController {
	@Autowired
	private ToDoRepository toDoRepository;

	@RequestMapping(value = "toDos", method = RequestMethod.GET)
    public List<ToDos> list(){
        return toDoRepository.findAll();
    }
	@RequestMapping(value = "addtoDos", method = RequestMethod.POST)
    public ToDos create(@RequestBody ToDos ToDos){
        return toDoRepository.saveAndFlush(ToDos);
    }
	@RequestMapping(value = "toDos/{taskId}", method = RequestMethod.GET)
    public ToDos get(@PathVariable Long id){
        return toDoRepository.findOne(id);
    }
	@RequestMapping(value = "toDos//{id}", method = RequestMethod.PUT)
    public ToDos update(@PathVariable Long id, @RequestBody ToDos ToDos){
        ToDos existingToDo = toDoRepository.findOne(id);
        BeanUtils.copyProperties(ToDos, existingToDo);
        return toDoRepository.saveAndFlush(ToDos);
    }
	@RequestMapping(value = "toDos/{id}", method = RequestMethod.DELETE)
    public ToDos delete(@PathVariable Long id){
        ToDos existingToDo = toDoRepository.findOne(id);
        toDoRepository.delete(existingToDo);
        return existingToDo;
    }

}
