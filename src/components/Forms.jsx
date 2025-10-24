import { useState } from "react";
import { ChevronDown, ChevronUp, Trash, PlusCircle } from "lucide-react";

const FormsStyle = {
  backgroundColor: 'white',
  minHeight: '100%',
  minWidth: '300px',
  maxWidth: '500px',
  flex: '1 1',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}

export default function Forms() {
  return (
    <div style={FormsStyle}>
      <General />
      <Education />
      <Experience />
    </div>
  );
}

const infoPaneStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: "#F9FBFC",
  padding: '10px',
  borderRadius: '10px',
  border: '2px solid #ECF0F5',
  flexShrink: '1',
  gap: '4px',
}

const FormNameStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px'
}

const collapseButtonStyle = {
  border: 'none',
  backgroundColor: 'transparent'
}
function FormName({name, icon, handleCollapse}) {
  const Icon = icon;
  return (
    <div style={FormNameStyle} onClick={handleCollapse}>
      <h2>{name}</h2>
      <button style={collapseButtonStyle}>
        <Icon size={30}/>
      </button>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: '40px',
  borderRadius: '10px',
  padding: '10px',
  border: '1px solid #D2DBE5'
}
function TextInput({label, id, placeholder, className = ""}) {
  return (
    <div className={`${className}`} style={{padding: '0 10px'}}>
      <label htmlFor={id}>{label}</label>
      <input style={inputStyle}
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

const TextAreaStyle = {
  resize: 'vertical',
  minHeight: '60px',
  maxHeight: '180px'
}
function TextArea({label, id, placeholder, className = ""}) {
  return (
    <div className={`${className}`} style={{padding: '0 10px'}}>
      <label htmlFor={id}>{label}</label>
      <textarea
        style={{...inputStyle, ...TextAreaStyle}}
        type="textarea"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

const formStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '20px'
}

function General() {
  const [shown, setShown] = useState(true);
  
  function handleCollapse() {
    setShown(!shown);
  }

  return (
    <div style={infoPaneStyle}>
      {shown && (
        <>
          <FormName name="General Information" icon={ChevronUp} handleCollapse={handleCollapse}/>
          <form style={formStyle}>
              <TextInput label="Full Name" id="full-name" placeholder="John Doe" />
              <div style={{display: 'flex'}}>
                <TextInput label="Email" id="email" placeholder="johndoe@example.com"/>
                <TextInput label="Phone Number" id="phone-number" placeholder="(123) 456-7890" />
              </div>
              <TextArea label="Professional Summary" id="professional-summary" placeholder="A brief summary of your professional background..."/>
          </form>
        </>
      )}
      {!shown && (
        <>
          <FormName name="General Information" icon={ChevronDown} handleCollapse={handleCollapse}/>
        </>
      )}
    </div>
  );
}

const educationPane = {
  border: '1px solid #EEF0F2',
  backgroundColor: '#DBEAFE',
  borderRadius: '10px',
  padding: '10px 0',
}
const removeInfoButton = {
  display: 'block',
  margin: '0 auto',
  padding: '10px 40px',
  border: 'none',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '4px',
  color: '#EF4444',
  fontWeight: '600',
}
const addInfoButton = {
  display: 'block',
  border: '2px dashed #659FF8',
  backgroundColor: 'white',
  padding: '10px 40px',
  margin: '0 auto',
  borderRadius: '10px',
  marginTop: '10px',
  width: '100%',
  color: '#1A7EF6',
  cursor: 'pointer',
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px'
}

function EducationPane({onRemove}) {
  return (
    <>
      <div style={educationPane}>
        <form style={formStyle}>
            <TextInput label="University/School" id="university-school" placeholder="University of Example" />
            <div style={{display: 'flex'}}>
              <TextInput label="Start Date" id="start-date" placeholder="August 2017"/>
              <TextInput label="End Date" id="end-date" placeholder="May 2020" />
            </div>
            <TextInput label="Degree" id="degree" placeholder="Masters of Science in CS"/>
        </form>
        <button style={removeInfoButton} onClick={onRemove}>
          <Trash size={18} fill="currentColor" />
            Remove
        </button>
      </div>
    </>
  );
}

function Education() {
  const [shown, setShown] = useState(true);
  const [educations, setEducations] = useState([{id: crypto.randomUUID()}]);
  
  function handleCollapse() {
    setShown(!shown);
  }

  function handleAddEducation() {
    setEducations([...educations, {id: crypto.randomUUID()}]);
  }

  function hanldeRemoveEducation(id) {
    setEducations(educations.filter(edu => edu.id !== id));    
  }
  
  return (
    <div style={infoPaneStyle}>
      {shown && (
        <>
          <FormName name="Educational Experience" icon={ChevronUp} handleCollapse={handleCollapse} />
          {
            educations.map((education) => (
              <EducationPane key={education.id} onRemove={() => {hanldeRemoveEducation(education.id)}}/>
            ))
          }
          <div>
            <button style={addInfoButton} onClick={handleAddEducation}>
              <PlusCircle size={18}/>
              Add Education
            </button>
          </div>
        </>
      )}
      {!shown && (
        <>
          <FormName name="Educational Experience" icon={ChevronDown} handleCollapse={handleCollapse}/>
        </>
      )}
    </div>
  );
}

function Experience() {
  const [shown, setShown] = useState(false);

  return (
    <div style={infoPaneStyle}>
      {shown && (
        <p>TEST</p>
      )}
    </div>
  );
}