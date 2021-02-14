package me.baruffi.demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.data.domain.Example;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import me.baruffi.demo.model.CarEntity;
import me.baruffi.demo.repo.CarRepository;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
class CarControllerTests {

	@Mock
	private CarRepository repository;

	@InjectMocks
	private CarController controller;

	private List<CarEntity> cars = new ArrayList<>();

	@BeforeEach
	void setup() {
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
	}

	@Test
	void allTest() {
		// Given
		when(repository.findAll()).thenReturn(cars);

		// When
		List<CarEntity> allCars = controller.all();

		// Then
		assertTrue(carNamesMatch(cars, allCars));
	}

	@Test
	void findByExampleTest() {
		// Given
		CarEntity searchCar = new CarEntity();
		searchCar.setMarca("Ford");

		cars.remove(2);
		cars.remove(1);

		when(repository.findAll(Example.of(searchCar))).thenReturn(cars);

		// When
		List<CarEntity> foundCars = controller.find(searchCar, null);

		// Then
		assertTrue(carNamesMatch(cars, foundCars));
	}

	@Test
	void findByDecadeTest() {
		// Given
		cars.remove(0);

		when(repository.findByDecade(1999)).thenReturn(cars);

		// When
		List<CarEntity> foundCars = controller.find(null, 1999);

		// Then
		assertTrue(carNamesMatch(cars, foundCars));
	}

	@Test
	void findByIdTest() {
		// Given
		when(repository.findById(1L)).thenReturn(Optional.of(cars.get(0)));

		// When
		CarEntity oneCar = controller.one(1L);

		// Then
		assertTrue(carNamesMatch(cars.get(0), oneCar));
	}

	@Test
	void newCarTest() {
		// Given
		Date currentDate = new Date(System.currentTimeMillis());
		CarEntity newCar = new CarEntity("Celta 3", "Chevrolet", 1993, "Mais outro carro eficiente e comfortável",
				false, currentDate, currentDate);

		when(repository.save(newCar)).thenAnswer(new Answer<CarEntity>() {
			public CarEntity answer(InvocationOnMock invocation) {
				cars.add(newCar);
				return newCar;
			}
		});
		when(repository.findAll()).thenReturn(cars);

		// When
		controller.newCar(newCar);
		List<CarEntity> allCars = controller.all();

		// Then
		assertEquals(4, allCars.size());
		assertTrue(carNamesMatch(newCar, allCars.get(3)));
	}

	@Test
	void replaceCarTest() {
		// Given
		Date currentDate = new Date(System.currentTimeMillis());
		CarEntity newCar = new CarEntity("Celta 3", "Chevrolet", 1993, "Mais outro carro eficiente e comfortável",
				false, currentDate, currentDate);

		when(repository.save(newCar)).thenAnswer(new Answer<CarEntity>() {
			public CarEntity answer(InvocationOnMock invocation) {
				cars.set(0, newCar);
				return newCar;
			}
		});
		when(repository.findAll()).thenReturn(cars);

		// When
		controller.replaceCar(newCar, 1L);
		List<CarEntity> allCars = controller.all();

		// Then
		assertTrue(carNamesMatch(cars, allCars));

		// Given
		when(repository.save(newCar)).thenAnswer(new Answer<CarEntity>() {
			public CarEntity answer(InvocationOnMock invocation) {
				cars.add(newCar);
				return newCar;
			}
		});

		// When
		controller.replaceCar(newCar, 5L);
		allCars = controller.all();

		// Then
		assertEquals(4, allCars.size());
		assertEquals(5L, allCars.get(3).getId());
	}

	@Test
	void editCarTest() {
		// Given
		CarEntity newCar = new CarEntity();
		boolean vendido = true;

		newCar.setVendido(vendido);

		when(repository.save(newCar)).thenAnswer(new Answer<CarEntity>() {
			public CarEntity answer(InvocationOnMock invocation) {
				cars.set(0, newCar);
				return newCar;
			}
		});
		when(repository.findById(1L)).thenReturn(Optional.of(newCar));
		when(repository.findAll()).thenReturn(cars);

		// When
		controller.editCar(newCar, 1L);
		List<CarEntity> allCars = controller.all();

		// Then
		assertTrue(carNamesMatch(cars, allCars));
		assertEquals(vendido, allCars.get(0).getVendido());
	}

	@Test
	void deleteCarTest() {
		// Given
		doAnswer(new Answer<Object>() {
			public Object answer(InvocationOnMock invocation) {
				cars.remove(0);
				return null;
			}
		}).when(repository).deleteById(1L);
		when(repository.findAll()).thenReturn(cars);

		// When
		controller.deleteCar(1L);
		List<CarEntity> allCars = controller.all();

		// Then
		assertEquals(2, allCars.size());
		assertTrue(carNamesMatch(cars, allCars));
	}

	private boolean carNamesMatch(List<CarEntity> carSources, List<CarEntity> carTargets) {
		List<String> carSourcesNames = carSources.stream().map(car -> car.getVeiculo()).collect(Collectors.toList());
		List<String> carTargetsNames = carTargets.stream().map(car -> car.getVeiculo()).collect(Collectors.toList());

		return carSourcesNames.equals(carTargetsNames);
	}

	private boolean carNamesMatch(CarEntity carSource, CarEntity carTarget) {
		return carSource.getVeiculo().equals(carTarget.getVeiculo());
	}
}
