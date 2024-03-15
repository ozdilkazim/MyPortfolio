import myResume from '/myresume';
export default function Resume () {
    return (
      <section id="resume" className="container resume">
         <div className="row">
            <div className="col-lg-6">
               <div className="col-4 main-title">
                  <h3>Education</h3>
               </div>
               <div className="col-8">
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
                  <h1><span>Skills</span></h1>
               </div>
               <div className="col-8">
                  <p>{myResume.skillsDescription}</p>
                  <div className="row">
                     <ul className="list-group skill-list">
                        {
                           myResume.skills.map((item) => {
                           return(
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                 {item.skillname}
                                 <span class="badge badge-primary badge-pill">14</span>
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