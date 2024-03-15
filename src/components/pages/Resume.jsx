import myResume from '/myresume';
export default function Resume () {
    return (
      <section id="resume" className="container resume">
         <div className="row education">
            <div className="col">
               <h1><span>Education</span></h1>
            </div>
            <div className="col">
              {
               myResume.education.map((item)=>{
                  return(
                    <div className="row">
                       <div className="col">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row">
            <div className="columns">
               <h1><span>Work</span></h1>
            </div>

            <div className="col">
              {
                myResume.work.map((item) => {
                  return(
                    <div className="row">
                       <div className="col">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row">
            <div className="col">
               <h1><span>Skills</span></h1>
            </div>
            <div className="col">
               <p>{myResume.skillsDescription}</p>

   				<div className="row">
   				   <ul className="col skills">
                {
                  myResume.skills.map((item) => {
                    return(
                      <li>
                      <span className={`skill-counter ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
}