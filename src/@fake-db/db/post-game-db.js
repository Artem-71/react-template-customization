import mock from '../mock';
import moment from 'moment';
import FuseUtils from '@fuse/utils';

function setDate(year, month, date, hours, minutes, seconds) {
	return moment(new Date(year, month, date, hours, minutes, seconds)).format('YYYY-MM-DDTHH:mm:ss.sssZ');
}
const postGameDB = {
	gameList: [
        {
            id: 0,
			groupName: 'The best Finance group',
			dateTime: setDate(2020, 3, 0, 0, 0, 0),
			duration: 30,
			status: 'upcoming',

        },
        {
            id: 1,
			groupName: 'The best bank member group',
			dateTime: setDate(2020, 12, 0, 0, 0, 0),
			duration: 30,
			status: 'complete',
        },
        {
            id: 2,
			groupName: 'The best Finance group',
			dateTime: setDate(2020, 12, 29, 5, 0, 0),
			duration: 30,
			status: 'upcoming',

        },
        {
            id: 3,
			groupName: 'the best Accounting group',
			dateTime: setDate(2020, 12, 24, 5, 0, 0),
			duration: 30,
			status: 'complete',

        }
    ]
};

mock.onGet('/api/post-game-app/post-game').reply(config => {
	return [200, postGameDB.gameList];
});

mock.onPost('/api/post-game-app/add-post-game').reply(request => {
	const data = JSON.parse(request.data);
	const newEvent = {
		...data.newEvent,
		id: FuseUtils.generateGUID()
	};
	postGameDB.gameList = [...postGameDB.gameList, newEvent];
	return [200, newEvent];
});