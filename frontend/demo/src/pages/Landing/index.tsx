import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';

export default function Landing() {
	return (
		<>
			<Header />
			<Container>
				<p>Seja bem-vindo.</p>
			</Container>
		</>
	);
}
