import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseUtils from '@fuse/utils';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactsTable from './ScheduledGameTable';
import { selectContacts } from './store/scheduledGameSlice';

function ContactsList(props) {
	const completedGames = useSelector(selectContacts);
	const searchText = useSelector(({ scheduledGamesApp }) => scheduledGamesApp.contacts.searchText);
	const [filteredData, setFilteredData] = useState(null);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Date',
				accessor: 'date',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Starting Time',
				accessor: 'startingTime',
				className: 'font-bold',
				sortable: true
			},
			{
				Header: 'Group Name',
				accessor: 'groupName',
				sortable: true
			},
			{
				Header: 'Game Name',
				accessor: 'gameName',
				sortable: true
			},
			{
				Header: 'Game Stage',
				accessor: 'gameStage',
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
					There are no scheduled games!
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
