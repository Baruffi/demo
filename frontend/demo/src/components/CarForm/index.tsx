import {
	FormControl,
	FormControlLabel,
	Grid,
	Select,
	TextField,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import React, { useEffect, useState } from 'react';
import { ICar } from '../../services/serverAPI';

interface IProps {
	canBeSold: boolean;
	car: ICar;
	submitCar(car: ICar): void;
	cancel(): void;
}

export default function CarForm({ canBeSold, car, submitCar, cancel }: IProps) {
	const [carData, setCarData] = useState(car);

	const marcas = [
		'Volkswagen',
		'Ford',
		'Chevrolet',
		'Honda',
		'Nissan',
		'Toyota',
		'Hyundai',
		'Kia',
	];

	useEffect(() => {
		setCarData(car);
	}, [car]);

	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		submitCar(carData);
	}

	function setCarField(field: string, value: string | boolean) {
		setCarData((previousCarData) => ({
			...previousCarData,
			[field]: value,
		}));
	}

	return (
		<form onSubmit={submitForm}>
			<Grid container justify="center" spacing={2}>
				<Grid item xs={12}>
					<TextField
						label="Veiculo"
						value={carData.veiculo}
						onChange={(e) => {
							setCarField('veiculo', e.target.value);
						}}
						required
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Descrição"
						value={carData.descricao}
						onChange={(e) => {
							setCarField('descricao', e.target.value);
						}}
						required
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							Fabricante
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							value={carData.marca}
							onChange={(e) => {
								setCarField('marca', e.target.value as string);
							}}
							native
							fullWidth
						>
							{marcas.map((marca) => (
								<option key={marca} value={marca}>
									{marca}
								</option>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						label="Ano"
						type="number"
						value={carData.ano}
						onChange={(e) => {
							setCarField('ano', e.target.value);
						}}
						required
						fullWidth
					/>
				</Grid>
				{canBeSold ? (
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									checked={carData.vendido}
									onChange={(e) => {
										setCarField(
											'vendido',
											e.target.checked,
										);
									}}
								/>
							}
							label="Vendido"
						/>
					</Grid>
				) : undefined}
				<Grid item xs={4}>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						fullWidth
					>
						Enviar
					</Button>
				</Grid>
				<Grid item xs={4}>
					<Button
						variant="contained"
						color="secondary"
						onClick={cancel}
						fullWidth
					>
						Cancelar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
