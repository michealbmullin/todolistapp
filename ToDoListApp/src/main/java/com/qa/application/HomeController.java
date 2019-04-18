package com.qa.application;



import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@Value("${greetingMessage}")
	
	private String greetingMessage;
	
	@RequestMapping("/")

	public String home(){
		
		return greetingMessage;
	}

}
