package com.qa.application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication


public class App {
    public static void main( String[] args ){
    	LOGGER.debug("Starting application");
    	SpringApplication.run(App.class, args);
    }
    private static final Logger LOGGER = LoggerFactory.getLogger(App.class);
    
	}
