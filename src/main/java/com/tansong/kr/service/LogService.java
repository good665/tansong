package com.tansong.kr.service;

import java.time.LocalDateTime;
import java.util.Iterator;
import java.util.ArrayList;
import java.util.List;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.tansong.kr.service.dto.LogEntryDTO;

@Service
public class LogService {
    private final List<LogEntryDTO> logs = new ArrayList<>();

    public void addLog(String message) {
        LocalDateTime now = LocalDateTime.now();
        //logs.add(new LogEntryDTO(message, now, now.plusYears(5))); // 5년 후 삭제 설정
    }

    public List<LogEntryDTO> getLogs() {
        return logs;
    }

    //매일 00:00에 실행되어 5년이 지난 로그 삭제
    // @Scheduled(cron = "0 0 0 * * ?")
    // public void removeExpiredLogs() {
    //     LocalDateTime now = LocalDateTime.now();
    //     Iterator<LogEntryDTO> iterator = logs.iterator();
    //     while (iterator.hasNext()) {
    //         LogEntryDTO log = iterator.next();
    //         if (log.getDeletionDate().isBefore(now)) {
    //             iterator.remove();
    //         }
    //     }
    // }
}
