import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CarForm from '../../components/CarForm';
import CarList from '../../components/CarList';
import Header from '../../components/Header';
import serverAPI, { ICar } from '../../services/serverAPI';

export default function Listing() {
	const [allCars, setAllCars] = useState([] as ICar[]);
	const [selectedCar, setSelectedCar] = useState<ICar>();
	const [updates, setUpdates] = useState(0);

	useEffect(() => {
		getCars();
	}, [updates]);

	async function getCars() {
		const response = await serverAPI.get('/veiculos');
		const data: ICar[] = response.data;

		setAllCars(data);
	}

	async function submitCar(car: ICar) {
		if (selectedCar) {
			await serverAPI.put(`/veiculos/${selectedCar.id}`, car);
		} else {
			await serverAPI.post('/veiculos', car);
		}

		setSelectedCar(undefined);
		setUpdates((updates) => updates + 1);
	}

	async function deleteCarById(id: string) {
		await serverAPI.delete(`/veiculos/${id}`);

		setUpdates((updates) => updates + 1);
	}

	function cancel() {
		setSelectedCar(undefined);
	}

	function selectCar(car: ICar) {
		setSelectedCar(car);
	}

	return (
		<>
			<Header />
			<Container style={{ marginTop: 10 }}>
				<CarForm
					canBeSold={selectedCar !== undefined}
					car={
						selectedCar || {
							veiculo: '',
							descricao: '',
							marca: 'Volkswagen',
							ano: 0,
							vendido: false,
						}
					}
					submitCar={submitCar}
					cancel={cancel}
				/>
				<CarList
					rows={allCars}
					edit={selectCar}
					deleteById={deleteCarById}
				/>
			</Container>
		</>
	);
}
