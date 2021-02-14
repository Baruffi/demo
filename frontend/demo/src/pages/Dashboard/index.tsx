import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CarList from '../../components/CarList';
import Header from '../../components/Header';
import serverAPI, { ICar } from '../../services/serverAPI';

export default function SignIn() {
	const [cars, setCars] = useState([] as ICar[]);

	useEffect(() => {
		getCars();
	}, []);

	async function getCars() {
		const response = await serverAPI('/cars');
		const data: ICar[] = response.data;

		setCars(data);
	}

	return (
		<>
			<Header />
			<Container style={{ marginTop: 10 }}>
				<CarList rows={cars} />
			</Container>
		</>
	);
}
