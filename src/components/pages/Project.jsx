import myResume from '/myresume';
export default function Project() {
    return (
      <section className="container" id="portfolio">
        <div className="row portfolio-grid ">
          { 
            myResume.project.map((item)=>{
                return(
                  <div className="col portfolio-item" id={`projct-${item.id}`} key={item.id}>
                    <img src={`img/${item.imgurl}`} className="item-img"/>
                    <div className="info-bar">
                      <div className="portfolio-item-info">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>     
                        <a href={item.deployedLink} target="_blank">
                          <p>Deployed Link</p>
                        </a>          
                        <a href={item.github} target="_blank">
                          <p>Github Page</p>
                        </a>  
                      </div>
                    </div>        
                  </div>
                )
              })
          }
        </div>
    </section>
    );
}