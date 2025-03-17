package com.tansong.kr.web.rest;

import org.springframework.web.bind.annotation.*;
import com.tansong.kr.service.LogService;
import com.tansong.kr.service.dto.LogEntryDTO;


import java.util.List;

@RestController
@RequestMapping("/locationLogs")
public class LogController {
    private final LogService logService;

    public LogController(LogService logService) {
        this.logService = logService;
    }
    
    @GetMapping
    public List<LogEntryDTO> getLogs() {
        return logService.getLogs();
    }

    @PostMapping
    public void logAccess(@RequestParam String message) {
        logService.addLog(message);
    }
}
