import React from 'react';
import {withRouter} from 'react-router-dom';

class Resume extends React.Component {
  render () {
    let skills = ["Ruby, ", "Ruby on Rails, ", "JavaScript, ", "jQuery, ", "React.js, ", "Redux, ", "SQL, ", "Git, ", "HTML5, ", "CSS "];

    return (
    <div className="resume">
      <p className="resumeName">Cassandra McClure</p>
        <span className="resumeTagline">Phone: 540-322-6610</span>
        <a className="resumeTagline" mailto="uncertainkitten@gmail.com">Email: uncertainkitten@gmail.com</a>
        <h2 className="resumeHeading">Skills</h2>
        <ul className="resumeList">{skills}</ul>
        <br />
        <h2 className="resumeHeading">Education</h2>
        <h3 className="resumeItem">App Academy (August 2018)</h3>
          <ul className="resumeList">
          <li className="resumeListItem">Rigorous 1000 - hour software development course with less than 3 % acceptance rate</li>
            <li className="resumeListItem"> Teaches full - stack web development: Rails, SQL, JS, React, TDD, algorithms, design patterns, and programming best practices.</li>
          </ul>
        <h3 className="resumeItem">Quincy College (January 2016 - May 2018)</h3>
        <ul className="resumeList">
          <li className="resumeListItem"> Associates of Science program in Business Management</li>
          <li className="resumeListItem"> Left college in good academic standing in order to pursue web development</li>
        </ul>
        <br />
        <h2 className="resumeHeading">Experience</h2>
       <h3 className="resumeItem">Medical Secretary at Atrius Health</h3>
          <ul className="resumeList">
            <li className="resumeListItem"> Answered 80 to 120 calls daily and assisted patients with their interactions with their primary care physicians.</li>
            <li className="resumeListItem"> Complied with HIPAA standards when working with electronic medical records.</li>
          </ul>
          <br />
          <h3 className="resumeItem">Medical Receptionist at Bay State Medical Associates</h3>
          <ul className="resumeList">
              <li className="resumeListItem"> Filed and referenced medical records to facilitate transmission of patient data.</li>
              <li className="resumeListItem"> Drafted patient letters for other treatment facilities and government agencies.</li>
          </ul>
          <br />
          <h3 className="resumeItem">Medical Transcriptionist at Sten-Tel</h3>
          <ul className="resumeList">
            <li className="resumeListItem"> Worked in home-based office on medical transcription contracts.</li>
            <li className="resumeListItem"> Transcribed recorded audio files of medical record dictations.</li>
            <li className="resumeListItem"> Assessed and input demographic data for inclusion in patient medical records.</li>
          </ul>
        <br />
        <h2 className="resumeHeading">Portfolio</h2>
        <h3 className="resumeItem">Lethe (Clone of Discord) <a href="https://github.com/uncertainkitten/Lethe">GitHub</a> | <a href="#">Live</a></h3>
        <ul className="resumeList">
          <li className="resumeListItem"> Lethe is a live chat app implemented with JS React/Redux frontend and Ruby on Rails backend</li>
        </ul>
    </div>
    );
  }
}

export default withRouter(Resume);