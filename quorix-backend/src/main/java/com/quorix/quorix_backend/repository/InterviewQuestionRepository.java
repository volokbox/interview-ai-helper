package com.quorix.quorix_backend.repository;

import com.quorix.quorix_backend.enitity.InterviewQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterviewQuestionRepository extends JpaRepository<InterviewQuestion, Long> {
    List<InterviewQuestion> findByTopic(String topic);
}