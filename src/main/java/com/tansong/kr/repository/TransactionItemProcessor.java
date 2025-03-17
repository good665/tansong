package com.tansong.kr.repository;

import org.springframework.batch.item.ItemProcessor;

import com.tansong.kr.domain.Transaction;

import java.time.LocalDateTime;

//데이터를 가공하는 ItemProcessor를 구현합니다.
public class TransactionItemProcessor implements ItemProcessor<Transaction, Transaction> {

    @Override
    public Transaction process(Transaction transaction) {
        transaction.setStatus("PROCESSED");  // 상태 업데이트
        transaction.setTransactionDate(LocalDateTime.now());  // 현재 시간으로 업데이트
        return transaction;
    }
}