import _ from '@lodash';
import clsx from 'clsx';
import React from 'react';

export const orderStatuses = [
	{
		id: 1,
		name: 'Used',
		color: 'bg-red text-white'
	},
	{
		id: 2,
		name: 'Reserved',
		color: 'bg-orange text-white'
	},
	{
		id: 3,
		name: 'Available',
		color: 'bg-green text-white'
	},
];

function OrdersStatus(props) {
	return (
		<div className={clsx('inline text-12 p-4 rounded truncate', _.find(orderStatuses, { name: props.name }).color)}>
			{props.name}
		</div>
	);
}

export default OrdersStatus;
