package com.tansong.kr.service.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor  // 기본 생성자 자동 생성
@AllArgsConstructor // 모든 필드를 포함하는 생성자 자동 생성
public class LogEntryDTO {
    private String message;
    private LocalDateTime timestamp;
    private LocalDateTime deletionDate;
}
