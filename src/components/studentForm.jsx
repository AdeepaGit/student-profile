import React, {useState} from 'react';
import './studentForm.css';

function StudentForm() {
    return(
      <div className="form">
          <div className="form-body">
            <div className='h123'> Student Pofile</div>
              <div className="username">
                  <label class name="h1" className="form__label" for="firstName">First Name-:  </label>
                  <input className="int" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="Last Name">
                  <label className="form__label" for="lastName">Last Name-:   </label>
                  <input  type="text" name="" id="lastName"  className="int"placeholder="LastName"/>
              </div>

              <div className="Nick Name">
                  <label className="form__label" for="Nick Name">Nick Name-:   </label>
                  <input  type="text" name="" id="Nick Name"  className="int"placeholder="NikeName"/>
              </div>
              <div className="Birth Date">
                  <label className="form__label" for="Birth Date">Birth Date-:   </label>
                  <input  type="text" name="" id="Birth Date"  className="int"placeholder="07/16/1996"/>
              </div>
              <div className="Gender">
                  <label className="form__label" for="Gender">Gender-:   </label>
                  <input  type="text" name="" id="Gender"  className="int"placeholder="M/F"/>
              </div>
              <div className="Nationality">
                  <label className="form__label" for="Nationality">Nationality-:   </label>
                  <input  type="text" name="" id="Nationality"  className="int"placeholder="Nationality "/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email-:   </label>
                  <input  type="email" id="email" className="int" placeholder="ABC@gmail.com"/>
              </div>


              <div className="Degree Programme">
                  <label className="form__label" for="Degree Programme">Degree Programme-:   </label>
                  <input  type="text" name="" id="Degree Programme"  className="brcs"placeholder="Ex-: ART1,SE2.DS3,CS4"/>
              </div>


              <div>
              <label className="tbox" for="email">Subjects-:   </label>
              <textarea>
               This is simple textarea
               </textarea>
               </div>
  
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div> 
           
    )       
}
export default StudentForm;