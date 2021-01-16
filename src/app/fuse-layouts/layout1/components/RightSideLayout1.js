import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import MainMenu from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import React from 'react';

function RightSideLayout1(props) {
	return (
		<>
			<ChatPanel />
			<MainMenu />
		</>
	);
}

export default React.memo(RightSideLayout1);
