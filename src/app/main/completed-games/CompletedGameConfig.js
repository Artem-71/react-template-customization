import React from 'react';

const CompletedGameConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/completed-games',
			component: React.lazy(() => import('./CompletedGameApp'))
		},
		{
			path: '/completed-game/dashboard',
			component: React.lazy(() => import('./dashboard'))
		},
	]
};

export default CompletedGameConfig;
