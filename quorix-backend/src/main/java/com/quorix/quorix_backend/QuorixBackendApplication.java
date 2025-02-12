package com.quorix.quorix_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class QuorixBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuorixBackendApplication.class, args);
	}

}
