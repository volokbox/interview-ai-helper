package com.quorix.quorix_backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    private final ChatClient chatClient;
    private final Logger logger = LoggerFactory.getLogger(ChatController.class);

    public ChatController(ChatClient.Builder builder) {
        this.chatClient =  builder.build();
    }

    @GetMapping("/question")
    public String question(@RequestParam(value = "question", defaultValue = "How many continents are in the World?") String question) {
        logger.info("Question sent to AI bot: {}", question);
        return chatClient.prompt()
                .user(question)
                .call()
                .content();
    }

}
