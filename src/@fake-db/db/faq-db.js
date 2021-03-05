import mock from '../mock';

const faqDB = [
	{
		id: '1',
		question: 'What is a Virtual Escape Room?',
		answer:
			'A virtual escape multi-players game designed for a team-building simulation to improve team-work, communication, collaboration, problem solving and my other team relevant skills.It is ideal for virtual teams.'
	},
	{
		id: '2',
		question: 'What is the rate of completing the game?',
		answer: 'The game is designed to complete between 60-90 depending on the team performance.Novice player and team members that new to each others will likely not complete game on-time first time.In addition, there are multi-stages to each game, so each stage increase the difficulty level and enable team efficiency at total different level.Each stage is played as a separate session.'
	},
	{
		id: '3',
		question: 'How long does the whole experience take?',
		answer:
			'Depending on the game, the number of players, and the team stage you choose to play. Typical timeline for a game is between 50 to 90 minutes.For Example: LABESCAPE with Novice Players will take around 90 minutes to complete. We had teams complete the game in 40 minutes, but these teams are advanced teams, and also played the game before, and this was their tune-up session.'
	},
	{
		id: '4',
		question: 'Can I play more than one game?',
		answer:
			'In fact we recommend that you and your team continue to play at least once every quarter. These are called team-tune up sessions.'
	},
	{
		id: '5',
		question: 'Will other people be in this room with us?',
		answer:
			'No. These virtual rooms are private to your team, and only visible to people who are invited to play in this session.'
	},
	{
		id: '6',
		question: 'What equipment do you need to play?',
		answer: 'This is a computer game played online. Therefore you need to the following equipment.1- A desktop or a laptop computer. 2- A decent Internet connection (at least 10 mbps download speed). 3- A web browser (chrome or Firefox) 4- A keyboard (Note: wireless Keyboard need to be fully charges or have enough battery power). 5- A computer mouse (Note: wireless mouse need to be fully charges or have enough battery power). 6- A working headset with a microphone so you can talk and hear your team speaking (Note: Headset need to be fully charges or have enough battery power)'
	},
	{
		id: '7',
		question: 'Is there an age limit?',
		answer:
			'It does not really matter as long as you have the right equipment and able to operate these equipment effectively, then you can play. We have team members plays as young as 8 years old, and we have team members as old as 60 years old.In fact, it is fun to see how different age groups plays differently.We have many family members with a mixed ages who played for the sake of bridging the family together and do something fun during the pandemic lockdown, and it was reported that it was very entertaining and exciting.'
	}
];

mock.onGet('/api/faq').reply(config => {
	return [200, faqDB];
});
