import { Dot, Phone, Mail } from "lucide-react";

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

const GeneralStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  color: '#0E1527',

};

function General({general}) {
  return (
    <div style={GeneralStyle}>
      <h1>{general.name}</h1>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '4px', color: '#4A617E'}}>
        <Mail size={18} />
        <p>{general.email}</p>
        <Dot size={30} />
        <Phone size={18} />
        <p>{general.phone}</p>
      </div>
      <p style={{alignSelf: 'flex-start', marginTop: '10px', fontSize: '22px', fontWeight: 'bold', color: '#0571D3'}}>Professional Summary</p>
      <hr style={{height: '4px', backgroundColor: '#B8D5F3', border: 'none', width: '100%'}} />
      <p style={{alignSelf: 'flex-start', color: '#38495D'}}>{general.summary}</p>
    </div>
  );
}

function Education({education}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <div>
        <p style={{alignSelf: 'flex-start', margin: '20px 0 4px 0', fontSize: '22px', fontWeight: 'bold', color: '#0571D3'}}>
          Education
        </p>
        <hr style={{height: '4px', backgroundColor: '#B8D5F3', border: 'none', width: '100%'}} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
        {education.map((edu, index) => (
          <div key={index} style={{display: 'flex', flexDirection: 'column', gap: '4px', color: '#1E2F43'}}>
            <p style={{fontSize: '20px', fontWeight: '700', opacity: '100%'}}>{edu.name}</p>
            <p style={{opacity: '95%'}}>{edu.degree}</p>
            <p style={{opacity: '80%'}}>{edu.start} - {edu.finish}</p>
          </div>
        ))}
      </div>
        
    </div>
  );
}

function Experience({experience}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <div>
        <p style={{alignSelf: 'flex-start', margin: '20px 0 4px 0', fontSize: '22px', fontWeight: 'bold', color: '#0571D3'}}>
          Experience
        </p>
        <hr style={{height: '4px', backgroundColor: '#B8D5F3', border: 'none', width: '100%'}} />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
        {experience.map((exp, index) => (
          <div key={index} style={{display: 'flex', flexDirection: 'column', gap: '4px', color: '#1E2F43'}}>
            <p style={{fontSize: '20px', fontWeight: '700', opacity: '100%'}}>{exp.name}</p>
            <p style={{opacity: '95%'}}>{exp.role}</p>
            <p style={{opacity: '80%'}}>{exp.start} - {exp.finish}</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start'}}>
              {
                exp.skills.map((skill, index) => (
                  <p key={index} style={{display: 'flex', justifyContent: 'center', gap: '4px'}}><Dot color="#1173D4"/>{skill}</p>
                ))
              }
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
}

export default function Preview({general, education, experience}) {
  general = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    summary: 'A brief summary of your professional background...'
  };
  education = [
    {
      name: 'University of Example',
      degree: 'Master of Science in Computer Science',
      start: '2018',
      finish: '2020'
    },
    {
      name: 'University of Example',
      degree: 'Master of Science in Computer Science',
      start: '2018',
      finish: '2020'
    }
  ]
  experience = [
    {
      name: 'Tech Solutions Inc.',
      role: 'Software Engineer',
      start: '2020',
      finish: 'present',
      skills: [
        'Developed and maintained web applications using modern technologies',
        'Collaborated with cross-function teams to deliver high qualify software',
        'Participated in code review and provided constructive feedback'
      ]
    }
  ]
  return (
    <div style={PreviewStyle}>
      <General general={general}/>
      <Education education={education}/>
      <Experience experience={experience}/>
    </div>
  );
}