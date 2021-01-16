import React from 'react';
import { Redirect } from 'react-router-dom';

const ScrumboardAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/action-plans/boards/:boardId/:boardUri?',
			component: React.lazy(() => import('./board/Board'))
		},
		{
			path: '/action-plans/boards',
			component: React.lazy(() => import('./boards/Boards'))
		},
		{
			path: '/action-plans',
			component: () => <Redirect to="/action-plans/boards" />
		}
	]
};

export default ScrumboardAppConfig;
