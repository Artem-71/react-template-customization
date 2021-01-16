import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactsTable from './CompletedGameTable';
import { selectContacts } from './store/completedGameSlice';

function ContactsList(props) {
	const completedGames = useSelector(selectContacts);
	const searchText = useSelector(({ completedGamesApp }) => completedGamesApp.contacts.searchText);
	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [
			{
				Header: [],
				accessor: 'avatar',
				Cell: ({ row }) => {
					return <Avatar className="mx-8" alt={row.original.name} src={row.original.avatar} />;
				},
				className: 'justify-center',
				width: 64,
				sortable: false
			},
			{
				Header: 'First Name',
				accessor: 'name',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Text Chat Frequency',
				accessor: 'textChat',
				sortable: true
			},
			{
				Header: 'Voice Chat Frequency',
				accessor: 'voiceChat',
				sortable: true
			},
			{
				Header: 'Number of Puzzle Interacted with',
				accessor: 'puzzle',
				sortable: true
			},
		],
		[]
	);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			if (_searchText.length === 0) {
				return completedGames;
			}
			return FuseUtils.filterArrayByString(completedGames, _searchText);
		}

		if (completedGames) {
			setFilteredData(getFilteredArray(completedGames, searchText));
		}
	}, [completedGames, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no completed games!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<ContactsTable
				columns={columns}
				data={filteredData}
			/>
		</FuseAnimate>
	);
}

export default ContactsList;
