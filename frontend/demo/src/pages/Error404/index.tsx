import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';

export default function ErrorPage() {
	return (
		<>
			<Header />

			<Container>
				<h1 style={{ color: '#333', textAlign: 'center' }}>
					Essa página não existe.
				</h1>
			</Container>
		</>
	);
}
