package me.baruffi.demo.controller;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import me.baruffi.demo.exception.CarNotFoundException;
import me.baruffi.demo.interfaces.DateTime;
import me.baruffi.demo.model.CarEntity;
import me.baruffi.demo.repo.CarRepository;

@RestController("/api/v1")
public class CarController {

	@Autowired
	private CarRepository repository;

	@Autowired
	private DateTime dateTime;

	@GetMapping("/veiculos")
	public List<CarEntity> all() {
		return repository.findAll();
	}

	@GetMapping("/veiculos/find")
	public List<CarEntity> find(CarEntity car) {
		return repository.findAll(Example.of(car));
	}

	@PostMapping("/veiculos")
	public CarEntity newCar(@RequestBody CarEntity newCar) {
		Date currentDate = dateTime.getDate();

		newCar.setVendido(false);
		newCar.setCreated(currentDate);
		newCar.setUpdated(currentDate);

		return repository.save(newCar);
	}

	// Single item

	@GetMapping("/veiculos/{id}")
	public CarEntity one(@PathVariable Long id) {
		return repository.findById(id).orElseThrow(() -> new CarNotFoundException(id));
	}

	@PatchMapping("/veiculos/{id}")
	public CarEntity editCar(@RequestBody CarEntity newCar, @PathVariable Long id) {
		Date currentDate = dateTime.getDate();

		newCar.setUpdated(currentDate);

		return repository.findById(id).map(car -> {
			copyNonNullProperties(newCar, car);
			return repository.save(car);
		}).orElseThrow(() -> new CarNotFoundException(id));
	}

	@PutMapping("/veiculos/{id}")
	public CarEntity replaceCar(@RequestBody CarEntity newCar, @PathVariable Long id) {
		Date currentDate = dateTime.getDate();

		newCar.setUpdated(currentDate);

		return repository.findById(id).map(car -> {
			copyNonNullProperties(newCar, car);
			return repository.save(car);
		}).orElseGet(() -> {
			newCar.setCreated(currentDate);
			newCar.setId(id);
			return repository.save(newCar);
		});
	}

	@DeleteMapping("/veiculos/{id}")
	public void deleteCar(@PathVariable Long id) {
		repository.deleteById(id);
	}

	private <T> void copyNonNullProperties(T source, T target) {
		if (source == null || target == null || target.getClass() != source.getClass())
			return;

		BeanWrapper src = new BeanWrapperImpl(source);
		BeanWrapper trg = new BeanWrapperImpl(target);

		for (Field property : target.getClass().getDeclaredFields()) {
			Object providedObject = src.getPropertyValue(property.getName());

			if (providedObject != null && !(providedObject instanceof Collection<?>)) {
				trg.setPropertyValue(property.getName(), providedObject);
			}
		}
	}
}
