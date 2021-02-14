package me.baruffi.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import me.baruffi.demo.model.CarEntity;

public interface CarRepository extends JpaRepository<CarEntity, Long> {

	@Query(value = "SELECT * FROM CARS WHERE ano >= ?1 - MOD(?1, 10) AND ano < ?1 - MOD(?1, 10) + 10 ", nativeQuery = true)
	public List<CarEntity> findByDecade(Integer anoReferencia);
}
