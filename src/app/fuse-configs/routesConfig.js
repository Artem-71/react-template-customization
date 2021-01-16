import FuseUtils from '@fuse/utils';
import CalendarAppConfig from 'app/main/calendar/CalendarAppConfig';
import ChatConfig from 'app/main/chat/ChatAppConfig';
import ContactsConfig from 'app/main/contacts/ContactsAppConfig';
import CompletedGameConfig from 'app/main/completed-games/CompletedGameConfig';
import ScheduledGamesConfig from 'app/main/scheduled-games/ScheduledGamesConfig';
import OrdersConfig from 'app/main/purchases/PurchasesAppConfig'
import ScrumboardConfig from 'app/main/scrumboard/ScrumboardAppConfig'
import Error404PageConfig from 'app/main/errors/404/Error404PageConfig';
import Error500PageConfig from 'app/main/errors/500/Error500PageConfig';
import FaqPageConfig from 'app/main/faq/FaqPageConfig';
import ProfilePageConfig from 'app/main/profile/ProfilePageConfig';
import ScheduleAppConfig from 'app/main/schedule/ScheduleAppConfig';
import PostGameDebriefings from 'app/main/post-game-debriefing/PostGameDebriefingConfig';
import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [
	CalendarAppConfig,
	ChatConfig,
	ContactsConfig,
	OrdersConfig,
	ScrumboardConfig,
	Error404PageConfig,
	Error500PageConfig,
	FaqPageConfig,
	ProfilePageConfig,
	CompletedGameConfig,
	ScheduledGamesConfig,
	ScheduleAppConfig,
	PostGameDebriefings
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/calendar" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
