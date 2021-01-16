import React from 'react';

const ECommerceAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/purchases',
			component: React.lazy(() => import('./Purchases'))
		},
	]
};

export default ECommerceAppConfig;
