package me.baruffi.demo.repo;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import me.baruffi.demo.model.CarEntity;

@DataJpaTest
public class CarRepositoryTests {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private CarRepository repository;

	private List<CarEntity> cars = new ArrayList<>();

	@BeforeEach
	void setup() {
		entityManager.clear();

		cars.clear();

		Date currentDate = new Date(System.currentTimeMillis());

		CarEntity testCar1 = new CarEntity("Fusca", "Ford", 1989, "Carro não eficiente e descomfortável", false,
				currentDate, currentDate);
		CarEntity testCar2 = new CarEntity("Celta", "Chevrolet", 1991, "Carro eficiente e comfortável", false,
				currentDate, currentDate);
		CarEntity testCar3 = new CarEntity("Celta 2", "Chevrolet", 1992, "Outro carro eficiente e comfortável", false,
				currentDate, currentDate);

		cars.add(testCar1);
		cars.add(testCar2);
		cars.add(testCar3);

		entityManager.persist(testCar1);
		entityManager.persist(testCar2);
		entityManager.persist(testCar3);

		entityManager.flush();
	}

	@Test
	void findByDecadeTest() {
		List<CarEntity> foundCars = repository.findByDecade(1999);

		cars.remove(0);

		assertTrue(carNamesMatch(cars, foundCars));
	}

	private boolean carNamesMatch(List<CarEntity> carSources, List<CarEntity> carTargets) {
		List<String> carSourcesNames = carSources.stream().map(car -> car.getVeiculo()).collect(Collectors.toList());
		List<String> carTargetsNames = carTargets.stream().map(car -> car.getVeiculo()).collect(Collectors.toList());

		return carSourcesNames.equals(carTargetsNames);
	}
}
