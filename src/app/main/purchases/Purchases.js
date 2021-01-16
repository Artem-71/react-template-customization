import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from './store';
import PurchasesHeader from './PurchasesHeaders';
import PurchasesTable from './PurchasesTable';

function Purchases() {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={<PurchasesHeader />}
			content={<PurchasesTable />}
			innerScroll
		/>
	);
}

export default withReducer('purchasesApp', reducer)(Purchases);
