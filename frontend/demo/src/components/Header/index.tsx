import { Button, Tooltip } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	}),
);

export default function Header() {
	const classes = useStyles();
	const { push } = useHistory();

	return (
		<AppBar position="static">
			<Toolbar style={{ minHeight: 50 }}>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>

				<Typography variant="h6" className={classes.title}>
					<Link
						to="/"
						style={{ color: 'white', textDecoration: 'none' }}
					>
						Demo
					</Link>
				</Typography>
				<Tooltip title="Veículos">
					<Button color="inherit" onClick={() => push('/veiculos')}>
						Veículos
					</Button>
				</Tooltip>
			</Toolbar>
		</AppBar>
	);
}
