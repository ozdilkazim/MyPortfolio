import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let myResume = this.props.myResume;
    return (
      <section className="container-fluid content" id="about">
         <div className="row">

            <div className="col-sm">

               <img className="profile-picture"  src={myResume.imagebaseurl} alt={myResume.name} />

            </div>

            <div className="col">

               <h2>About Me</h2>
               <p>
               {
                 myResume.aboutme
               }
               </p>

               <div className="row">

                  <div className="col">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{myResume.name}</span>
                     <br></br>
       						   <span>
                     {myResume.address}
                    </span>
                    <br></br>
                    <span>{myResume.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}