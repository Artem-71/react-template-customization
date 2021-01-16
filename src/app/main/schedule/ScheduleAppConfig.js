import React from 'react';

const ScheduleAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/schedule',
			component: React.lazy(() => import('./ScheduleApp'))
		}
	]
};

export default ScheduleAppConfig;
