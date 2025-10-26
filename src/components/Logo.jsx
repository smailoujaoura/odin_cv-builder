import { FileText } from "lucide-react";

export default function Logo() {
	return (
		<div className="flex items-center justify-center gap-2">
			<FileText size={30} className="text-blue-600"/>
			<p className="text-[1.3rem] font-bold text-[#0A1124]">CV Builder</p>
		</div>
	);
}


// const LogoStyle = {
// 	display: 'flex',
// 	alignItems: 'center',
// 	justifyContent: 'center',
// 	gap: '8px'
// };

// const FileTextStyle = {
// 	color: '#0062D1'
// };

// const pStyle = {
// 	fontSize: '1.3rem',
// 	fontWeight: 'bold',
// 	color: '#0A1124'
// }