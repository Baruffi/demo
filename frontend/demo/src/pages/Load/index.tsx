import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

export default function Load() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<CircularProgress color="primary" />
		</div>
	);
}
