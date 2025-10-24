import { useRef, useState } from "react";
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

const PreviewStyle = {
  backgroundColor: 'white',
  minHeight: '100%',
  maxHeight: '800px',
  minWdith: '300px',
  maxWidth: '800px',
  flex: '1 1',
  borderRadius: '10px',
  padding: '20px',
}

export default function Main({previewRef}) {
	const [generals, setGenerals] = useState({name: '', email: '', phone: '', summary: ''})
	const [educations, setEducations] = useState([{id: crypto.randomUUID(), name: '', start: '', finish: '', degree: ''}]);
	const [experiences, setExperiences] = useState([{id: crypto.randomUUID(), name: '', role: '', start: '', finish: '', skills: ''}]);
	return (
		<div style={MainStyle}>
			<Forms
				generalsState={[generals, setGenerals]}
				educationState={[educations, setEducations]}
				experiencesState={[experiences, setExperiences]}
			/>
			<div ref={previewRef} style={PreviewStyle}>
				<Preview
					ref={previewRef}
					general={generals}
					education={educations}
					experience={experiences}
				/>
			</div>
		</div>
	);
}
