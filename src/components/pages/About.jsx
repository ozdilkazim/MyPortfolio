
import myResume from '/myresume';
export default function About() {
    return (
      <section className="container about" id="about">
         <div className="row content">
            <div className="col-4">
               <img className="profile-picture"  src={myResume.imagebaseurl} alt={myResume.name} />
            </div>
            <div className="col-8">
               <h2>About Me</h2>
               <p>{myResume.aboutme}</p>
               <div className="row">
                  <div className="col">
                     <h2>Contact Details</h2>
                     <div className="address">
                        <p>{myResume.name} - {myResume.address}</p>
                        <p>{myResume.website}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }