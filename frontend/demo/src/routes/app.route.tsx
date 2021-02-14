import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Load from '../pages/Load';

const Landing = lazy(() => import('../pages/Landing'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Error404 = lazy(() => import('../pages/Error404'));

export default function AppRoutes() {
	return (
		<Suspense fallback={<Load />}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/app" component={Dashboard} />
				<Route path="*" component={Error404} />
			</Switch>
		</Suspense>
	);
}
