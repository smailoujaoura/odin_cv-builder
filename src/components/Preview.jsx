import { Dot, Phone, Mail } from "lucide-react";

function General({general}) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 text-[#0e1527]">
      <h1>{general.name}</h1>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '4px', color: '#4A617E'} }>
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
              <p key={index} style={{display: 'flex', justifyContent: 'center', gap: '4px'}}>{exp.skills}</p>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
}

export default function Preview({general, education, experience}) {
  return (
    <div className="bg-white min-h-full max-h-[800px] min-w-[300px] max-w-[800px] flex-1 grow shrink rounded-[10px] p-5">
      <General general={general}/>
      <Education education={education}/>
      <Experience experience={experience}/>
    </div>
  );
}
