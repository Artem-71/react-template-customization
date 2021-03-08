import mock from '../mock';

const completedGamesDB = {
	completedGames: [
		{
			id: '5725a680b3249760ea21de52',
			name: 'Abbott',
			lastName: 'Sammie Tom',
			avatar: 'assets/images/avatars/Abbott.jpg',
			textChat: '10',
			voiceChat: '200',
			puzzle: '14',
			date: '2020/10/03',
			group: 'Financial Group',
			game: 'Lab Escape',
			stage: '2'
		},
		{
			id: '5725a680606588342058356d',
			name: 'Arnold',
			lastName: 'Matlock Tom',
			avatar: 'assets/images/avatars/Arnold.jpg',
			textChat: '100',
			voiceChat: '300',
			puzzle: '0',
			date: '2020/10/05',
			group: 'Apartment Management Group',
			game: 'Castle Escape',
			stage: '4'
		},
		{
			id: '5725a68009e20d0a9e9acf2a',
			name: 'Barrera',
			lastName: 'Bradbury Omar',
			avatar: 'assets/images/avatars/Barrera.jpg',
			textChat: '1',
			voiceChat: '5',
			puzzle: '7',
			date: '2020/10/09',
			group: 'ITS Group',
			game: 'Cas Escape',
			stage: '3'
		},
		{
			id: '5725a6809fdd915739187ed5',
			name: 'Blair Hodem',
			lastName: 'Strangeway',
			avatar: 'assets/images/avatars/Blair.jpg',
			textChat: '33',
			voiceChat: '655',
			puzzle: '7',
			date: '2020/10/16',
			group: 'School Group',
			game: 'Castle Escape',
			stage: '2'
		},
		{
			id: '5725a68007920cf75051da64',
			name: 'Boyle',
			lastName: 'Winters',
			avatar: 'assets/images/avatars/Boyle.jpg',
			textChat: '3',
			voiceChat: '3',
			puzzle: '5',
			date: '2020/10/13',
			group: 'Upwork Group',
			game: 'Lab Escape',
			stage: '1'
		},
		{
			id: '5725a68031fdbb1db2c1af47',
			name: 'Christy Jimmy',
			lastName: 'Camacho',
			avatar: 'assets/images/avatars/Christy.jpg',
			textChat: '7',
			voiceChat: '54',
			puzzle: '78',
			date: '2020/10/19',
			group: 'Hospital Group',
			game: 'Lab Escape',
			stage: '4'
		},
		{
			id: '5725a680bc670af746c435e2',
			name: 'Copeland',
			lastName: 'Redcliff',
			avatar: 'assets/images/avatars/Copeland.jpg',
			textChat: '7',
			voiceChat: '54',
			puzzle: '77',
			date: '2020/11/09',
			group: 'Booking Home Group',
			game: 'Castle Escape',
			stage: '3'
		},
		{
			id: '5725a680e7eb988a58ddf303',
			name: 'Estes',
			lastName: 'Stevens',
			avatar: 'assets/images/avatars/Estes.jpg',
			textChat: '3',
			voiceChat: '4',
			puzzle: '5',
			date: '2020/11/13',
			group: 'Booking Home Group',
			game: 'Castle Escape',
			stage: '2'
		},
		{
			id: '5725a680dcb077889f758961',
			name: 'Harper',
			lastName: 'MacGuffin',
			avatar: 'assets/images/avatars/Harper.jpg',
			textChat: '33',
			voiceChat: '655',
			puzzle: '7',
			date: '2020/11/09',
			group: 'School Management Group',
			game: 'Lab Escape',
			stage: '4'
		},
		{
			id: '5725a6806acf030f9341e925',
			name: 'Kelen Mandela',
			lastName: 'Sheridan',
			avatar: 'assets/images/avatars/Helen.jpg',
			textChat: '1',
			voiceChat: '5',
			puzzle: '7',
			date: '2020/11/19',
			group: 'Booking Home Group',
			game: 'Castle Escape',
			stage: '3'
		},
		{
			id: '5725a680ae1ae9a3c960d487',
			name: 'Hender',
			lastName: 'Cambiana',
			avatar: 'assets/images/avatars/Henderson.jpg',
			textChat: '10',
			voiceChat: '200',
			puzzle: '14',
			date: '2020/11/21',
			group: 'School Management Group',
			game: 'Lab Escape',
			stage: '4'
		},
		{
			id: '5725a680b8d240c011dd224b',
			name: 'Josegit ',
			lastName: 'Lakefield',
			avatar: 'assets/images/avatars/Josefina.jpg',
			textChat: '10',
			voiceChat: '100',
			puzzle: '145',
			date: '2020/11/23',
			group: 'Apartment Group',
			game: 'Lab Escape',
			stage: '3'
		},
		{
			id: '5725a68034cb3968e1f79eac',
			name: 'Tomy',
			lastName: 'Polishchuk',
			avatar: 'assets/images/avatars/Katina.jpg',
			textChat: '10',
			voiceChat: '200',
			puzzle: '14',
			date: '2020/11/25',
			group: 'School Group',
			game: 'Lab Escape',
			stage: '4'
		},
		{
			id: '5725a6801146cce777df2a08',
			name: 'Vitalii',
			lastName: 'Peasegood',
			avatar: 'assets/images/avatars/Lily.jpg',
			textChat: '10',
			voiceChat: '200',
			puzzle: '11',
			date: '2020/11/28',
			group: 'Hospital Group',
			game: 'Castle Escape',
			stage: '3'
		},
		{
			id: '5725a6808a178bfd034d6ecf',
			name: 'Marry',
			lastName: 'Noxtom',
			avatar: 'assets/images/avatars/Mai.jpg',
			textChat: '10',
			voiceChat: '200',
			puzzle: '14',
			date: '2020/12/01',
			group: 'School Management Group',
			game: 'Lab Escape',
			stage: '2'
		}
	]
};

mock.onGet('/api/completed-games-app/completed-games').reply(config => {
	let response = [];
	response = completedGamesDB.completedGames;
	return [200, response];
});
