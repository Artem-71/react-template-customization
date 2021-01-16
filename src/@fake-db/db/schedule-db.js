import FuseUtils from '@fuse/utils';
import moment from 'moment';
import mock from '../mock';

function setDate(year, month, date, hours, minutes, seconds) {
	return moment(new Date(year, month, date, hours, minutes, seconds)).format('YYYY-MM-DDTHH:mm:ss.sssZ');
}

const calendarDB = {
	events: [
		{
			id: 0,
			title: 'All Day Event very long title',
			start: setDate(2020, 3, 0, 0, 0, 0),
			location: 'Moscow',
			gameName: 'Labescape',
			sessionKey: {
				itemKey: true,
				data: [
					{
						id: '5725a68031fdbb1db2c1af47',
						firstName: 'Christy',
						lastName: 'Camacho',
						avatar: 'assets/images/avatars/Christy.jpg',
					},
					{
						id: '5725a68007920cf75051da64',
						firstName: 'Boyle',
						lastName: 'Winters',
						avatar: 'assets/images/avatars/Boyle.jpg',
					},
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			spectator: {
				itemKey: true,
				data: [
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					},
					{
						id: '5725a6806acf030f9341e925',
						firstName: 'Helen',
						lastName: 'Sheridan',
						avatar: 'assets/images/avatars/Helen.jpg',
					}
				]
			},
			faciltator: {
				itemKey: true,
				data: [
					{
						id: '5725a680b8d240c011dd224b',
						firstName: 'Josefina',
						lastName: 'Lakefield',
						avatar: 'assets/images/avatars/Josefina.jpg',
					}
				]
			}
		},
		{
			id: 1,
			title: 'Long Event',
			start: setDate(2020, 3, 7, 0, 0, 0),
			location: 'London',
			gameName: 'Castleescape',
			sessionKey: {
				itemKey: true,
				data: [
					{
						id: '5725a68031fdbb1db2c1af47',
						firstName: 'Christy',
						lastName: 'Camacho',
						avatar: 'assets/images/avatars/Christy.jpg',
					},
					{
						id: '5725a68007920cf75051da64',
						firstName: 'Boyle',
						lastName: 'Winters',
						avatar: 'assets/images/avatars/Boyle.jpg',
					},
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			spectator: {
				itemKey: true,
				data: [
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			faciltator: {
				itemKey: true,
				data: [
					{
						id: '5725a680b8d240c011dd224b',
						firstName: 'Josefina',
						lastName: 'Lakefield',
						avatar: 'assets/images/avatars/Josefina.jpg',
					}
				]
			}
		},
		{
			id: 2,
			title: 'DTS STARTS',
			start: setDate(2020, 11, 29, 0, 0, 0),
			location: 'Moscow',
			gameName: 'Labescape',
			sessionKey: {
				itemKey: true,
				data: [
					{
						id: '5725a68031fdbb1db2c1af47',
						firstName: 'Christy',
						lastName: 'Camacho',
						avatar: 'assets/images/avatars/Christy.jpg',
					},
					{
						id: '5725a68007920cf75051da64',
						firstName: 'Boyle',
						lastName: 'Winters',
						avatar: 'assets/images/avatars/Boyle.jpg',
					},
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			spectator: {
				itemKey: true,
				data: [
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					},
					{
						id: '5725a6806acf030f9341e925',
						firstName: 'Helen',
						lastName: 'Sheridan',
						avatar: 'assets/images/avatars/Helen.jpg',
					}
				]
			},
			faciltator: {
				itemKey: true,
				data: [
					{
						id: '5725a680b8d240c011dd224b',
						firstName: 'Josefina',
						lastName: 'Lakefield',
						avatar: 'assets/images/avatars/Josefina.jpg',
					}
				]
			}
		},
		{
			id: 3,
			title: 'DTS ENDS',
			start: setDate(2020, 11, 28, 0, 0, 0),
			location: 'London',
			gameName: 'Castleescape',
			sessionKey: {
				itemKey: true,
				data: [
					{
						id: '5725a68031fdbb1db2c1af47',
						firstName: 'Christy',
						lastName: 'Camacho',
						avatar: 'assets/images/avatars/Christy.jpg',
					},
					{
						id: '5725a68007920cf75051da64',
						firstName: 'Boyle',
						lastName: 'Winters',
						avatar: 'assets/images/avatars/Boyle.jpg',
					},
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			spectator: {
				itemKey: true,
				data: [
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			faciltator: {
				itemKey: true,
				data: [
					{
						id: '5725a680b8d240c011dd224b',
						firstName: 'Josefina',
						lastName: 'Lakefield',
						avatar: 'assets/images/avatars/Josefina.jpg',
					}
				]
			}
		},
		{
			id: 4,
			title: 'Some Event',
			start: setDate(2020, 3, 9, 0, 0, 0),
			location: 'Moscow',
			gameName: 'Labescape',
			sessionKey: {
				itemKey: true,
				data: [
					{
						id: '5725a68031fdbb1db2c1af47',
						firstName: 'Christy',
						lastName: 'Camacho',
						avatar: 'assets/images/avatars/Christy.jpg',
					},
					{
						id: '5725a68007920cf75051da64',
						firstName: 'Boyle',
						lastName: 'Winters',
						avatar: 'assets/images/avatars/Boyle.jpg',
					},
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					}
				]
			},
			spectator: {
				itemKey: true,
				data: [
					{
						id: '5725a680bc670af746c435e2',
						firstName: 'Copeland',
						lastName: 'Redcliff',
						avatar: 'assets/images/avatars/Copeland.jpg',
					},
					{
						id: '5725a6806acf030f9341e925',
						firstName: 'Helen',
						lastName: 'Sheridan',
						avatar: 'assets/images/avatars/Helen.jpg',
					}
				]
			},
			faciltator: {
				itemKey: true,
				data: [
					{
						id: '5725a680b8d240c011dd224b',
						firstName: 'Josefina',
						lastName: 'Lakefield',
						avatar: 'assets/images/avatars/Josefina.jpg',
					}
				]
			}
		}
	]
};

mock.onGet('/api/schedule-app/schedule').reply(config => {
	return [200, calendarDB.events];
});

mock.onPost('/api/schedule-app/add-schedule').reply(request => {
	const data = JSON.parse(request.data);
	const newEvent = {
		...data.newEvent,
		id: FuseUtils.generateGUID()
	};
	calendarDB.events = [...calendarDB.events, newEvent];
	return [200, newEvent];
});

mock.onPost('/api/schedule-app/update-schedule').reply(request => {
	const data = JSON.parse(request.data);
	calendarDB.events = calendarDB.events.map(event => {
		if (data.event.id === event.id) {
			return data.event;
		}
		return event;
	});
	return [200, data.event];
});

mock.onPost('/api/schedule-app/remove-schedule').reply(request => {
	const data = JSON.parse(request.data);
	const event = calendarDB.events.find(_event => data.eventId === _event.id);
	calendarDB.events = calendarDB.events.filter(_event => _event.id !== event.id);
	return [200, event];
});
