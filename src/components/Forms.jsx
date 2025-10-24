import { useState } from "react";
import { ChevronDown, ChevronUp, Trash, PlusCircle } from "lucide-react";

const FormsStyle = {
  backgroundColor: 'white',
  minHeight: '100%',
  maxHeight: '800px',
  minWidth: '300px',
  maxWidth: '500px',
  flex: '1 1',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  overflowY: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarColor: '#659FF8 transparent',
  // scrollbarWidth: 'none',
  // msOverflowStyle: 'none',
}

export default function Forms({generalsState, educationState, experiencesState}) {
  return (
    <div style={FormsStyle}>
      <General generalsState={generalsState} />
      <Education educationState={educationState} />
      <Experience experiencesState={experiencesState} />
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
function TextInput({label, id, placeholder, value, onChange, className = ""}) {
  return (
    <div className={`${className}`} style={{padding: '0 10px'}}>
      <label htmlFor={id}>{label}</label>
      <input 
        style={inputStyle}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

const TextAreaStyle = {
  resize: 'vertical',
  minHeight: '60px',
  maxHeight: '180px'
}
function TextArea({label, id, placeholder, value, onChange, className = ""}) {
  return (
    <div className={`${className}`} style={{padding: '0 10px'}}>
      <label htmlFor={id}>{label}</label>
      <textarea
        style={{...inputStyle, ...TextAreaStyle}}
        type="textarea"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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

function General({generalsState}) {
  const [shown, setShown] = useState(true);
  const [generals, setGenerals] = generalsState;
  
  function handleCollapse() {
    setShown(!shown);
  }

  function handleChange(newGenerals) {
    setGenerals(newGenerals);
  }

  return (
    <div style={infoPaneStyle}>
      {shown && (
        <>
          <FormName name="General Information" icon={ChevronUp} handleCollapse={handleCollapse}/>
          <form style={formStyle}>
              <TextInput
                label="Full Name"
                id="full-name"
                placeholder="John Doe"
                value={generals.name}
                onChange={(e) => {handleChange({...generals, name: e.target.value})}}
              />
              <div style={{display: 'flex'}}>
                <TextInput
                  label="Email"
                  id="email"
                  placeholder="johndoe@example.com"
                  value={generals.email}
                  onChange={(e) => {handleChange({...generals, email: e.target.value})}}
                />
                <TextInput
                  label="Phone Number"
                  id="phone-number"
                  placeholder="(123) 456-7890"
                  value={generals.phone}
                  onChange={(e) => {handleChange({...generals, phone: e.target.value})}}
                />
              </div>
              <TextArea
                label="Professional Summary"
                id="professional-summary"
                placeholder="A brief summary of your professional background..."
                value={generals.summary}
                onChange={(e) => {handleChange({...generals, summary: e.target.value})}}
              />
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

function EducationPane({onRemove, onChange, education}) {
  return (
    <>
      <div style={educationPane}>
        <form style={formStyle}>
            <TextInput 
              label="University/School"
              id="university-school"
              placeholder="University of Example"
              value={education.name}
              onChange={(e) => onChange({...education, name: e.target.value})}
            />
            <TextInput
              label="Degree"
              id="degree"
              placeholder="Masters of Science in CS"
              value={education.degree}
              onChange={(e) => onChange({...education, degree: e.target.value})}
            />
            <div style={{display: 'flex'}}>
              <TextInput
                label="Start Date" 
                id="start-date"
                placeholder="August 2017"
                value={education.start}
                onChange={(e) => onChange({...education, start: e.target.value})}
              />
              <TextInput
                label="End Date"
                id="end-date"
                placeholder="May 2020"
                value={education.finish}
                onChange={(e) => onChange({...education, finish: e.target.value})}
              />
            </div>
        </form>
        <button style={removeInfoButton} onClick={onRemove}>
          <Trash size={18} fill="currentColor" />
            Remove
        </button>
      </div>
    </>
  );
}

function Education({educationState}) {
  const [shown, setShown] = useState(false);
  // const [educations, setEducations] = useState([{id: crypto.randomUUID()}]);
  const [educations, setEducations] = educationState;
 
  function handleCollapse() {
    setShown(!shown);
  }

  function handleAddEducation() {
    setEducations([...educations, {
      id: crypto.randomUUID(),
      name: '',
      start: '',
      finish: '',
      degree: ''
    }]);
  }

  function hanldeRemoveEducation(id) {
    setEducations(educations.filter(edu => edu.id !== id));    
  }

  function handleChange(id, newEducation) {
    setEducations(prev => 
      prev.map(e => e.id === id ? newEducation : e)
    );
    // setEducations([...educations, newEducation]);
  }
  
  return (
    <div style={infoPaneStyle}>
      {shown && (
        <>
          <FormName name="Educational Experience" icon={ChevronUp} handleCollapse={handleCollapse} />
          {
            educations.map((education) => (
              <EducationPane 
                key={education.id}
                onRemove={() => hanldeRemoveEducation(education.id)}
                onChange={(newEducation) => handleChange(education.id, newEducation)}
                education={education}
              />
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

function ExperiencePane({onRemove, onChange, experience}) {
  return (
    <>
      <div style={educationPane}>
        <form style={formStyle}>
            <TextInput 
              label="Compnay"
              id="university-school"
              placeholder="University of Example"
              value={experience.name}
              onChange={(e) => onChange({...experience, name: e.target.value})}
            />
            <TextInput 
              label="Role"
              id="role"
              placeholder="Software Engineer"
              value={experience.role}
              onChange={(e) => onChange({...experience, role: e.target.value})}
            />
            <TextArea
              label="Responsibilities"
              id="responsibilities-summary"
              placeholder="A brief summary of the work done in this role..."
              value={experience.skills}
              onChange={(e) => onChange({...experience, skills: e.target.value})}
            />
            <div style={{display: 'flex'}}>
              <TextInput
                label="Start Date" 
                id="start-date"
                placeholder="August 2017"
                value={experience.start}
                onChange={(e) => onChange({...experience, start: e.target.value})}
              />
              <TextInput
                label="End Date"
                id="end-date"
                placeholder="May 2020"
                value={experience.finish}
                onChange={(e) => onChange({...experience, finish: e.target.value})}
              />
            </div>
        </form>
        <button style={removeInfoButton} onClick={onRemove}>
          <Trash size={18} fill="currentColor" />
            Remove
        </button>
      </div>
    </>
  );
}

function Experience({experiencesState}) {
  const [shown, setShown] = useState(false);
  const [experiences, setExperiences] = experiencesState;
 
  function handleCollapse() {
    setShown(!shown);
  }

  function handleAddEducation() {
    setExperiences([...experiences, {
      id: crypto.randomUUID(),
      name: '',
      role: '',
      start: '',
      finish: '',
      skills: ''
    }]);
  }

  function hanldeRemoveEducation(id) {
    setExperiences(experiences.filter(exp => exp.id !== id));    
  }

  function handleChange(id, newExperience) {
    setExperiences(prev => 
      prev.map(e => e.id === id ? newExperience : e)
    );
  }
  
  return (
    <div style={infoPaneStyle}>
      {shown && (
        <>
          <FormName name="Practical Experience" icon={ChevronUp} handleCollapse={handleCollapse} />
          {
            experiences.map((experience) => (
              <ExperiencePane 
                key={experience.id}
                onRemove={() => hanldeRemoveEducation(experience.id)}
                onChange={(newEducation) => handleChange(experience.id, newEducation)}
                experience={experience}
              />
            ))
          }
          <div>
            <button style={addInfoButton} onClick={handleAddEducation}>
              <PlusCircle size={18}/>
              Add Experience
            </button>
          </div>
        </>
      )}
      {!shown && (
        <>
          <FormName name="Practical Experience" icon={ChevronDown} handleCollapse={handleCollapse}/>
        </>
      )}
    </div>
  );
}