import React from 'react';

const PostGameDebriefingConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/post-game-debriefings',
			component: React.lazy(() => import('./PostGameDebriefingPage'))
		}
	]
};

export default PostGameDebriefingConfig;
