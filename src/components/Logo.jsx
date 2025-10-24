import { FileText } from "lucide-react";

const LogoStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '8px'
};

const FileTextStyle = {
	color: '#0062D1'
};

const pStyle = {
	fontSize: '1.3rem',
	fontWeight: 'bold',
	color: '#0A1124'
}

export default function Logo() {
	return (
		<div style={LogoStyle}>
			<FileText size={30} style={FileTextStyle}/>
			<p style={pStyle}>CV Builder</p>
		</div>
	);
}