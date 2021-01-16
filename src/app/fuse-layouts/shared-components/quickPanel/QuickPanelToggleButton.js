import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleQuickPanel } from './store/stateSlice';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

function QuickPanelToggleButton(props) {
	const dispatch = useDispatch();

	return (
		<IconButton className="w-40 h-40" onClick={ev => dispatch(toggleQuickPanel())}>
			{props.children}
		</IconButton>
	);
}

QuickPanelToggleButton.defaultProps = {
	children: <MenuOpenIcon />
};

export default QuickPanelToggleButton;
