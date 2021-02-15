import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';
import bubbleSort from './BubbleSort';
import fatorial from './Factorial';
import somaDosMultiplosDeNAbaixoDeX from './Multiples';
import Votos from './Votes';

export default function Landing() {
	const votos = new Votos();

	const listaDesordenada = [5, 3, 2, 4, 7, 1, 0, 6];
	const listaOrdenada = bubbleSort([5, 3, 2, 4, 7, 1, 0, 6]);

	const numeroQualquer = Math.floor(Math.random() * 20);
	const fatorialDeNumeroQualquer = fatorial(numeroQualquer);

	const x = Math.ceil(Math.random() * 1000);
	const multiplosDe3ou5AbaixoDeXFormula =
		somaDosMultiplosDeNAbaixoDeX(3, x) +
		somaDosMultiplosDeNAbaixoDeX(5, x) -
		somaDosMultiplosDeNAbaixoDeX(15, x);

	return (
		<>
			<Header />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Typography variant="h5" gutterBottom>
							Votos em relação ao total de eleitores
						</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Percentual válidos: ${votos.calcularPercentualValidos()}%`}</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Percentual brancos: ${votos.calcularPercentualBrancos()}%`}</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Percentual nulos: ${votos.calcularPercentualNulos()}%`}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="h5" gutterBottom>
							Algorítmo de ordenação bubble sort
						</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Lista desordenada: ${listaDesordenada}`}</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Lista ordenada: ${listaOrdenada}`}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="h5" gutterBottom>
							Fatorial
						</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Número a ser calculado o fatorial: ${numeroQualquer}`}</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Fatorial do número: ${fatorialDeNumeroQualquer}`}</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="h5" gutterBottom>
							Multiplos de 3 ou 5
						</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Número máximo a ser considerado: ${x}`}</Typography>
						<Typography
							variant="body1"
							gutterBottom
						>{`Múltiplos de 3 ou 5 abaixo desse número: ${multiplosDe3ou5AbaixoDeXFormula}`}</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
