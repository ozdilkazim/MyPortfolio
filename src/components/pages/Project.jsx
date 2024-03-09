import React, { Component } from 'react';
export default class Project extends Component {
  render() {
    let myResume = this.props.myResume;
    return (
      <section className="container" id="portfolio">
        <div className="row">
          <div className="col">
            <div id="portfolio-grid" key="1" className="portfolio-grid">
            { 
              myResume.project && myResume.project.map((item)=>{
                return(
                  <div className="row portfolio-item" key={`${item.name}`}>
                    <div className="col item-wrap">
                      <a href={item.deployedLink}>
                        <img src={`${window.location.origin}/${item.imgurl}`} className="item-img"/>
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
}