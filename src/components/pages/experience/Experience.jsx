import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience =()=> {
    return (
        <>
        <div style={{background:"#2d7a80"}} id="experience">
        <div>
            <h1 className='pt-3 text-center pb-3' >Internship and qualification</h1>
        </div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="July 2020 - sept 2020"
    iconStyle={{ background: '#f3a127', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">React developer</h3>
    <h2 className="vertical-timeline-element-subtitle">At Tutor Technical</h2>
    <p>
      Worked with front-end team to create website in react.js
    </p>
    <div>
    <Button
        variant="contained"
        color="default"
        onClick={(e)=>{
            e.preventDefault();
            window.location.href="http://www.tutortechnical.com"
        }}
        >
        See live
    </Button>
      </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feb 2018- mar 2018"
    iconStyle={{ background:'#f3a127', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Cloud computing (AWS) and web development</h3>
    <h2 className="vertical-timeline-element-subtitle">At Techmaniacs eduservices</h2>
    <p>
        Student intern at techmaniacs learned more about webdevelopment and cloud computing using AWS.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017- present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Electronics and telecommunication engineering</h3>
    <h2 className="vertical-timeline-element-subtitle">At Sinhgad institute of technology,Lonavala</h2>
    <p>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
        </>

    )
}

export default Experience;