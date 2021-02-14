package me.baruffi.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import me.baruffi.demo.model.CarEntity;

public interface CarRepository extends JpaRepository<CarEntity, Long> {
}
