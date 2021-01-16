import mock from '../mock';

const profileDB = {
	firstName: 'Jone',
	lastName: 'Doe',
	organizationName: 'Perfect group',
	email: 'mail@withinpixels.com',
	avatar: 'assets/images/avatars/Velazquez.jpg',
};

mock.onGet('/api/profile').reply(config => {
	return [200, profileDB];
});
