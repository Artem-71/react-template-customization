import mock from '../mock';

const todoDB = {
	todos: [
		{
			id: '561551bd7fe2ff461101c192',
			title: 'Computer Devices',
			notes:
				'You can use any computing device running Windows 10 or Mac OS.Devices such as laptops and desktops are the only devices that can work appropriately for such games.Devices that you CAN NOT use: - mobile devices - tablets, and - any device that does not have a proper mouse or a keyboard.',
			startDate: new Date(2018, 8, 3),
			dueDate: new Date(2018, 8, 5),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
		},
		{
			id: '561551bd4ac1e7eb77a3a750',
			title: 'Computer Browser',
			notes: 'The Team-building Games are streamed online and are compatible with browsers that support specific technologies. Browsers that are compatible with our Team-building Games are: 1- Google Chrome 2- FirefoxWe recommend installing both just if one does not work; you can quickly switch to the other browser and continue your play.',
			startDate: new Date(2018, 4, 3),
			dueDate: new Date(2018, 4, 5),
			completed: false,
			starred: false,
			important: true,
			deleted: false,
		},
		{
			id: '561551bd917bfec2ddef2d49',
			title: 'Check your internet speed',
			notes: 'The Virtual Escape games uses high-quality pixel streaming technologies to give you the best and most realistic experience. However, the side effect of that is that you need a high-speed and stable internet connection. You minimum internet speed required is 10 mbps at download.Use this website to test your internet speed as it provide the most accurate results. https://testmy.net/',
			startDate: new Date(2018, 5, 3),
			dueDate: new Date(2018, 5, 5),
			completed: false,
			starred: true,
			important: true,
			deleted: false,
		},
		{
			id: '561551bdeeb2fd6877e18c29',
			title: 'Check your system microphone',
			notes:
				'You require a working microphone to voice-chat with your group. Therefore you must have a working microphone and accessible via the browser.To test that, we recommend you try using this site in advance before joining the game. https://mictestonline.com/OR this https://www.onlinemictest.com/.',
			startDate: new Date(2018, 9, 3),
			dueDate: new Date(2018, 9, 5),
			completed: true,
			starred: true,
			important: false,
			deleted: false,
		},
		{
			id: '561551bdf38eae0134ae43d4',
			title: 'Check system speakers',
			notes:
				'To hear your team conversation and the actions in the game, you need to have a working speakers or a headset.here is a website where you can check that. https://soundtest.io/',
			startDate: new Date(2018, 6, 3),
			dueDate: new Date(2018, 6, 4),
			completed: false,
			starred: false,
			important: false,
			deleted: false,
		},
		{
			id: '561551bd32f1588c814a0ccd',
			title: 'Check mouse & keyboard',
			notes:
				'Virtual Escape Games requires a working computer mouse or a trackpad, as well as a functional keyboard.You can still play without a computer mouse, but it is more natural to use a computer mouse. Some users customize their computer mouse in a specific way, making it too sensitive to play these kinds of games. Therefore, we provided you the option to work entirely using the keyboard functions. See the list of the Keyboard keys and associated game functions.W = Move Forward S = Move Backward A= Turn Left D= Turn Right E= Look Up C= Look Down F= Interact with ObjectsAlso, you can use the arrow key as well. Upward Arrow = Move Forward Downward Arrow = Move Backward Left Arrow = Left Sideway Movement Right Arrow = Right Sideway MovementComputer Mouse Movement 360-degree movement, but still need to use the Keyboard to move forward and backward The left mouse button (LMB) is used to interact with objects similar to the F key in the Keyboard.Important Reminder for people using Wireless Mouse and Keyboard: 1- Both are fully charged 2- have spare batteries around if you are using a Keyboard and mouse that operate using batteries.',
			startDate: new Date(2018, 5, 3),
			dueDate: new Date(2018, 6, 5),
			completed: false,
			starred: true,
			important: false,
			deleted: false,
		},
		{
			id: '561551bd0bb4b08ca77038ef',
			title: 'Practice, Practice, Practice',
			notes: 'The Virtual Escape Games uses specific keyboard keys and computer mouse interactions; therefore, requiring strong motor skills and coordination. We built you a practice game so you can practice these skills before playing the actual game. By doing so, you will be in better shape to keep up with your teammates and enjoy the play, rather than struggling to navigate your way through and keep up with your group.Play the Maze Escape to practice. Remember this not the actual game. this is for Game controls practice only. Remember to have fun too. Maze Escape',
			startDate: new Date(2018, 2, 3),
			dueDate: new Date(2018, 3, 5),
			completed: true,
			starred: false,
			important: false,
			deleted: false,
		},
		{
			id: '561551bdf84eec913835ebe5',
			title: 'Text and voice chat',
			notes: "Our Virtual Escape Games are text and voice chat enabled. So you can communicate with your group using text chat while inside the game by clicking the Enter key on your Keyboard; which will open the Chat window for you to chat, and when you finish writing, hit the Enter key again so you can go back to the gameplay. This text chat feature is only available when you start the game.The Voice chat works the same way but is enabled by Pressing and Holding the T key on your Keyboard. As soon as you release the hold of the T key, the microphone will stop transmitting any sound.We also enabled you to hear everyone's conversation in your group-game session without needing to press any keyboard keys. Besides, we allowed the voice chat feature even in the lobby areas before entering the game session. This way, your group can voice chat while everyone is gathered and ready to join the game.",
			startDate: new Date(2018, 4, 3),
			dueDate: new Date(2018, 6, 2),
			completed: true,
			starred: false,
			important: true,
			deleted: false,
		}
	],
	folders: [
		{
			id: 0,
			handle: 'all',
			title: 'All',
			icon: 'view_headline'
		}
	],
	filters: [
		{
			id: 0,
			handle: 'starred',
			title: 'Starred',
			icon: 'star'
		},
		{
			id: 1,
			handle: 'important',
			title: 'Priority',
			icon: 'error'
		},
		{
			id: 2,
			handle: 'dueDate',
			title: 'Sheduled',
			icon: 'schedule'
		},
		{
			id: 3,
			handle: 'today',
			title: 'Today',
			icon: 'today'
		},
		{
			id: 4,
			handle: 'completed',
			title: 'Done',
			icon: 'check'
		},
		{
			id: 5,
			handle: 'deleted',
			title: 'Deleted',
			icon: 'delete'
		}
	],
	labels: [
		{
			id: 1,
			handle: 'frontend',
			title: 'Frontend',
			color: '#388E3C'
		},
		{
			id: 2,
			handle: 'backend',
			title: 'Backend',
			color: '#F44336'
		},
		{
			id: 3,
			handle: 'api',
			title: 'API',
			color: '#FF9800'
		},
		{
			id: 4,
			handle: 'issue',
			title: 'Issue',
			color: '#0091EA'
		},
		{
			id: 5,
			handle: 'mobile',
			title: 'Mobile',
			color: '#9C27B0'
		}
	]
};

mock.onGet('/api/todo-app/todos').reply(config => {
	const { params } = config;
	let response = [];
	if (params.labelHandle) {
		const labelId = todoDB.labels.find(label => label.handle === params.labelHandle).id;

		response = todoDB.todos.filter(todo => todo.labels.includes(labelId) && !todo.deleted);
	} else if (params.filterHandle) {
		if (params.filterHandle === 'deleted') {
			response = todoDB.todos.filter(todo => todo.deleted);
		} else {
			response = todoDB.todos.filter(todo => todo[params.filterHandle] && !todo.deleted);
		}
	} // folderHandle
	else {
		let { folderHandle } = params;
		if (!folderHandle) {
			folderHandle = 'all';
		}

		if (folderHandle === 'all') {
			response = todoDB.todos.filter(todo => !todo.deleted);
		} else {
			const folderId = todoDB.folders.find(folder => folder.handle === folderHandle).id;
			response = todoDB.todos.filter(todo => todo.folder === folderId && !todo.deleted);
		}
	}

	return [200, response];
});

mock.onPost('/api/todo-app/update-todo').reply(request => {
	const todo = JSON.parse(request.data);

	todoDB.todos = todoDB.todos.map(_todo => {
		if (_todo.id === todo.id) {
			return todo;
		}
		return _todo;
	});

	return [200, todo];
});

mock.onPost('/api/todo-app/new-todo').reply(request => {
	const todo = JSON.parse(request.data);

	todoDB.todos = [todo, ...todoDB.todos];

	return [200, todo];
});

mock.onPost('/api/todo-app/remove-todo').reply(request => {
	const todoId = request.data;
	todoDB.todos = todoDB.todos.map(_todo => {
		if (_todo.id === todoId) {
			_todo.deleted = true;
		}
		return _todo;
	});
	return [200, todoId];
});

mock.onGet('/api/todo-app/filters').reply(200, todoDB.filters);
mock.onGet('/api/todo-app/labels').reply(200, todoDB.labels);
mock.onGet('/api/todo-app/folders').reply(200, todoDB.folders);

mock.onPost('/api/todo-app/set-folder').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedTodoIds, folderId } = data;
	todoDB.todos = todoDB.todos.map(_todo => {
		if (selectedTodoIds.includes(_todo.id)) {
			return {
				..._todo,
				folder: folderId
			};
		}
		return _todo;
	});

	return [200];
});

mock.onPost('/api/todo-app/toggle-label').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedTodoIds, labelId } = data;
	todoDB.todos = todoDB.todos.map(_todo => {
		if (selectedTodoIds.includes(_todo.id)) {
			return {
				..._todo,
				labels: _todo.labels.includes(labelId)
					? _todo.labels.filter(_id => _id !== labelId)
					: [..._todo.labels, labelId]
			};
		}
		return _todo;
	});

	return [200];
});
mock.onPost('/api/todo-app/delete-todos').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedTodoIds } = data;
	todoDB.todos = todoDB.todos.filter(_todo => (selectedTodoIds.includes(_todo.id) ? false : _todo));
	return [200];
});
