import React, { Component } from 'react';
import './content.css';

class Scoursed extends Component {
    state = {  } 
    
    render() { 
                return (
                
                <div className ="cContainer">
                
                <div className="cTitle">Courses Content</div>
                
                <div className="title2">Semester 1</div>
                        <ul  className="subject">
                                    <li>Software Engineering Concepts and Programming</li>
                                     <li>Web Application Development</li>
                                    <li>Introduction to Object Oriented Programming</li>
                
                </ul>                  
                <div className="title2" >Semester 2</div>
                <ul className="subject" >
                <li>Communication Skills</li>
                <li>Introduction to Business Studies</li>
                <li>Computer Security Concepts </li>
                </ul>
        
        </div>


        );
    }
}
 
export default Scoursed;