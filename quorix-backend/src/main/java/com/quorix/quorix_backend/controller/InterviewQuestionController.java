package com.quorix.quorix_backend.controller;

import com.quorix.quorix_backend.enitity.InterviewQuestion;
import com.quorix.quorix_backend.repository.InterviewQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/test/questions")
public class InterviewQuestionController {

    @Autowired
    private InterviewQuestionRepository repository;

    @GetMapping
    public List<InterviewQuestion> getAllQuestions() {
        return repository.findAll();
    }

    @GetMapping("/public")
    public List<InterviewQuestion> getAllPublicQuestions() {
        return repository.findByTopic("some");
    }
}