import { IconButton, Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import React from 'react';
import { ICar } from '../../services/serverAPI';

interface IProps {
	rows: ICar[];
	edit(car: ICar): void;
	deleteById(carId: string): void;
}
export default function CarList({ rows, edit, deleteById }: IProps) {
	function getRowsByBrand(currentRows: ICar[]) {
		const rowsByBrand = currentRows.map((row) => {
			return row.marca;
		});

		return getRepeatedRowsByCategory(rowsByBrand);
	}

	function getRowsByDecade(currentRows: ICar[]) {
		const rowsByDecade = currentRows.map((row) => {
			return row.ano - (row.ano % 10);
		});

		return getRepeatedRowsByCategory(rowsByDecade);
	}

	function getRepeatedRowsByCategory(repeatedRows: any[]) {
		const repeatedRowsByCategory = repeatedRows.reduce((prev, cur) => {
			prev[cur] = (prev[cur] || 0) + 1;
			return prev;
		}, {});

		let repeatedRowsByCategoryList: JSX.Element[] = [];

		for (const key in repeatedRowsByCategory) {
			if (
				Object.prototype.hasOwnProperty.call(
					repeatedRowsByCategory,
					key,
				)
			) {
				const element = repeatedRowsByCategory[key];
				repeatedRowsByCategoryList.push(
					<div key={key}>
						{`${key}: ${element}`}
						<br />
					</div>,
				);
			}
		}

		return repeatedRowsByCategoryList;
	}

	return (
		<Paper>
			<TableContainer>
				<Table>
					<caption>
						<strong>Carros não vendidos</strong>
						<br />
						{rows.filter((row) => !row.vendido).length}
						<br />
						<strong>Carros por fabricante</strong>
						<br />
						{getRowsByBrand(rows)}
						<strong>Carros por década</strong>
						<br />
						{getRowsByDecade(rows)}
					</caption>
					<TableHead>
						<TableRow>
							<TableCell>Veículo</TableCell>
							<TableCell>Descrição</TableCell>
							<TableCell>Fabricante</TableCell>
							<TableCell>Ano</TableCell>
							<TableCell>Vendido</TableCell>
							<TableCell>Editar</TableCell>
							<TableCell>Deletar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id} hover>
								<TableCell>{row.veiculo}</TableCell>
								<TableCell>{row.descricao}</TableCell>
								<TableCell>{row.marca}</TableCell>
								<TableCell>{row.ano}</TableCell>
								<TableCell>
									{row.vendido ? 'SIM' : 'NÃO'}
								</TableCell>
								<TableCell>
									<IconButton
										color="secondary"
										onClick={() => edit(row)}
									>
										<Edit />
									</IconButton>
								</TableCell>
								<TableCell>
									<IconButton
										color="secondary"
										onClick={() => deleteById(row.id!)}
									>
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
						<TableRow>
							<TableCell align="center" colSpan={7}>
								Registrados durante a última semana
							</TableCell>
						</TableRow>
						{rows
							.filter(
								(row) =>
									Date.parse(row.created!) >=
									Date.now() - 7 * 24 * 60 * 60 * 1000,
							)
							.map((row) => (
								<TableRow key={row.id} hover>
									<TableCell>{row.veiculo}</TableCell>
									<TableCell>{row.descricao}</TableCell>
									<TableCell>{row.marca}</TableCell>
									<TableCell>{row.ano}</TableCell>
									<TableCell>
										{row.vendido ? 'SIM' : 'NÃO'}
									</TableCell>
									<TableCell>
										<IconButton
											color="secondary"
											onClick={() => edit(row)}
										>
											<Edit />
										</IconButton>
									</TableCell>
									<TableCell>
										<IconButton
											color="secondary"
											onClick={() => deleteById(row.id!)}
										>
											<Delete />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
