import React, { Component } from 'react';
import project5 from '../../img/bootstrap-portfolio.jpg';
import project3 from '../../img/movies-for-munchies.png';
import project1 from '../../img/nonaturalstone.jpg';
import project7 from '../../img/password-generator.jpg';
import project8 from '../../img/readme-generator.jpg';
import project2 from '../../img/team-profile-generator.jpg';
import project4 from '../../img/weather-dashboard.jpg';
import project6 from '../../img/workday-scheduler.jpg';

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
                  // Create an array of projects img urls
                  const imageMap = [
                  project1,
                  project2,
                  project3,
                  project4,
                  project5,
                  project6,
                  project7,
                  project8,
                  ]
                return(
    
                  <div className="row portfolio-item" id={`projct-${item.id}`} key={item.id}>
                    <div className="col item-wrap">
                      <a href={item.deployedLink}>
                        <img src={`${imageMap[item.id]}`} className="item-img"/>
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