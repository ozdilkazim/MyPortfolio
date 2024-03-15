import myResume from '/myresume';
export default function Project() {
    return (
      <section className="container" id="portfolio">
        <div className="row">
          <div className="col">
            <div id="portfolio-grid" key="1" className="portfolio-grid">
            { 
              myResume.project.map((item)=>{
                return(
    
                  <div className="row portfolio-item" id={`projct-${item.id}`} key={item.id}>
                    <div className="col item-wrap">
                      <a href={item.deployedLink}>
                        <img src={`img/${item.imgurl}`} className="item-img"/> 
                        <div className="info-bar">
                          <div className="portfolio-item-info">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>                   
                      <a href={item.github}>
                        <p>Github Page</p>
                      </a>
                    </div>
                  </div>
                )
              })
          }
            </div>
          </div>
        </div>
      </section>
        );
}