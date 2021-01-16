import React from 'react';

const CompletedGameConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/scheduled-games',
			component: React.lazy(() => import('./ScheduledGamesApp'))
		}
	]
};

export default CompletedGameConfig;
