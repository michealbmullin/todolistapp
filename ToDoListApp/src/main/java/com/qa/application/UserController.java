package com.qa.application;

import java.util.List;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/")


public class UserController {
		@Autowired
		private UserRepository userRepository;

		@RequestMapping(value = "User", method = RequestMethod.GET)
	    public List<User> list(){
	        return userRepository.findAll();
	    }
		@RequestMapping(value = "UserSignup", method = RequestMethod.POST)
	    public User create(@RequestBody User User){
	        return userRepository.saveAndFlush(User);
	    }
		@RequestMapping(value = "User/validate", method = RequestMethod.POST)
	    public Long findByEmailAndPassword(@RequestBody User user){
			List<User> matchedCredentials = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
			if (matchedCredentials.isEmpty()){
				return 0L;
			}else {
	        	 Long backendId = matchedCredentials.get(0).getUserId();
	        	return backendId;
			}
		}
		@RequestMapping(value = "User/{userId}", method = RequestMethod.PUT)
	    public User update(@PathVariable Long id, @RequestBody User User){
	        User existingUser = userRepository.findOne(id);
	        BeanUtils.copyProperties(User, existingUser);
	        return userRepository.saveAndFlush(User);
	    }
		@RequestMapping(value = "User/{userId}", method = RequestMethod.DELETE)
	    public User delete(@PathVariable Long id){
	        User existingUser = userRepository.findOne(id);
	        userRepository.delete(existingUser);
	        return existingUser;
	    }

	}


