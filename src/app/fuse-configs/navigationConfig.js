
const navigationConfig = [
	{
		id: 'calendar',
		title: 'Calendar',
		type: 'item',
		icon: 'today',
		url: '/calendar'
	},
	{
		id: 'e-commerce-orders',
		title: 'Purchases',
		type: 'item',
		icon: 'shopping_cart',
		url: '/purchases',
		exact: true
	},
	{
		id: 'contacts',
		title: 'Contacts',
		type: 'item',
		icon: 'account_box',
		url: '/contacts/all'
	},
	{
		id: 'chat',
		title: 'Chat',
		type: 'item',
		icon: 'chat',
		url: '/chat',
		badge: {
			title: 13,
			bg: 'rgb(9, 210, 97)',
			fg: '#FFFFFF'
		}
	},
	{
		id: 'schedule',
		title: 'Schedule a game',
		type: 'item',
		icon: 'schedule',
		url: '/schedule'
	},
	{
		id: 'scheduledGame',
		title: 'Scheduled games',
		type: 'item',
		icon: 'event_note',
		url: '/scheduled-games'
	},
	{
		id: 'completedGame',
		title: 'Completed games',
		type: 'item',
		icon: 'fact_check',
		url: '/completed-games'
	},
	{
		id: 'actionPlans',
		title: 'Action Plans',
		type: 'item',
		icon: 'assessment',
		url: '/action-plans'
	},
	{
		id: 'faq',
		title: 'Faq',
		type: 'item',
		icon: 'help',
		url: '/faq'
	},
	{
		id: 'profile',
		title: 'Profile',
		type: 'item',
		icon: 'person',
		url: '/profile'
	},
	{
		id: 'postGameDebriefings',
		title: 'Post Game Debriefings',
		type: 'item',
		icon: 'departure_board',
		url: '/post-game-debriefings'
	}
];

export default navigationConfig;
