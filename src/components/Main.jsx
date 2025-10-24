import { useState } from "react";
import Forms from "./Forms";
import Preview from "./Preview";

const MainStyle = {
	backgroundColor: '#F6F7F8',
	flexGrow: '1',
	padding: '2rem',
	display: 'flex',
	gap: '2rem',
	flexWrap: 'wrap'
}

export default function Main() {
	return (
		<div style={MainStyle}>
			<Forms />
			<Preview />
		</div>
	);
}