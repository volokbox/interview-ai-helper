package com.quorix.quorix_backend.enitity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "interview_questions")
@Data // Lombok annotation for getters/setters
public class InterviewQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topic;
    private String question;
    private String difficulty;
}