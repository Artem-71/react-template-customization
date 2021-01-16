import mock from '../mock';

const scheduleDB = {
	schedule: [
		{
			id: '5725a680b3249760ea21de52',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 14, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a680606588342058356d',
			gameName: 'Cab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName2',
			date: "January 15, 2020",
			startingTime: "4:00 pm EST"
		},
		{
			id: '5725a68009e20d0a9e9acf2a',
			gameName: 'Cab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName2',
			date: "January 15, 2020",
			startingTime: "4:00 pm EST"
		},
		{
			id: '5725a6809fdd915739187ed5',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 13, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a68007920cf75051da64',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName3',
			date: "January 18, 2020",
			startingTime: "8:00 am EST"
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 19, 2020",
			startingTime: "9:00 am EST"
		},
		{
			id: '5725a680bc670af746c435e2',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 25, 2020",
			startingTime: "3:00 pm EST"
		},
		{
			id: '5725a680e7eb988a58ddf303',
			gameName: 'Cab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 21, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a680dcb077889f758961',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 29, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a6806acf030f9341e925',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 19, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a680ae1ae9a3c960d487',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 14, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a680b8d240c011dd224b',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 15, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a68034cb3968e1f79eac',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 15, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a6801146cce777df2a08',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 15, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a6801146cce777df2a08',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 15, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a680b8d240c011dd224b',
			gameName: 'Lab Castle',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 15, 2020",
			startingTime: "11:00 am EST"
		},
		{
			id: '5725a68034cb3968e1f79eac',
			gameName: 'Labescape',
			gameStage: 'Stage 1',
			groupName: 'GroupName1',
			date: "January 15, 2020",
			startingTime: "11:00 am EST"
		},
	]
};

mock.onGet('/api/scheduled-games-app/scheduled-games').reply(config => {
	let response = [];
	response = scheduleDB.schedule;
	return [200, response];
});
mock.onPost('/api/scheduled-games-app/scheduled-game').reply(request => {
	const data = JSON.parse(request.data);
	let response = [];
	scheduleDB.schedule.forEach(event => {
		if (data.id === event.id) {
			response.push(event);
		}
	});
	return [200, response];
});

