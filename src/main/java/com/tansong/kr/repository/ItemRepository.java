package com.tansong.kr.repository;

import org.springframework.stereotype.Repository;

import com.tansong.kr.domain.Item;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {    
}
