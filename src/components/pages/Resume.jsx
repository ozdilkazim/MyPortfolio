import myResume from '/myresume';
export default function Resume () {
    return (
      <section id="resume" className="container resume">
         <div className="row">
            <div className="col-lg-6">
               <div className="col-4 main-title">
                  <h3>Education</h3>
               </div>
               <div className="col-8" key={myResume.education.YearOfPassing}>
                  {
                     myResume.education.map((item)=>{
                        return(
                        <div className="row">
                           <div className="col title">
                              <h4>{item.UniversityName}</h4>
                              <p className="info">{item.specialization} - <span className="date">{item.MonthOfPassing} {item.YearOfPassing}</span></p>
                              <p>{item.Achievements}</p>
                           </div>
                        </div>
                        )
                     })
                  }
               </div>
            </div>
            
            <div className="col-lg-6">
               <div className="col-4 main-title">
                  <h3>Work</h3>
               </div>
               <div className="col-8">
                  {
                     myResume.work.map((item) => {
                        return(
                        <div className="row">
                           <div className="col title">
                              <h4>{item.CompanyName}</h4>
                              <p className="info">{item.specialization} - <span className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</span></p>
                              <p>{item.Achievements}</p>
                           </div>
                        </div>

                        )
                     })
                  }
               </div> 
            </div>
         </div>
         <div className="container-fluid">         
            <div className="col">
               <div className="col-4 main-title">
                  <h3>Skills</h3>
               </div>
               <div className="col-8">
                  <h4>{myResume.skillsDescription}</h4>
                  <div className="row">
                     <ul className="list-group skill-list">
                        {
                           myResume.skills.map((item) => {
                           return(
                              <li className="list-group-item d-flex justify-content-between align-items-center row" key={`${item.progress}`}>
                              <div className="progress">
                                 <span className="skill">{item.skillname} <i className="val">{item.progress}%</i></span>
                                 <div className="progress-bar-area">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={`${item.progress}`} aria-valuemin="0" aria-valuemax="100" style={{width: item.progress + '%'}}></div>
                                 </div>
                              </div>
                              </li>
                           )
                           })
                        }
                     </ul>
                  </div>
               </div>
            </div></div>

      </section>
    );
}