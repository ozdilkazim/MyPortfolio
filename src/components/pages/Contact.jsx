import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let myResume = this.props.myResume;
    return (
      <section id="contact">
          <div className="row">
            <div className="col">
              <p className="lead">
              Please do not hessisate fo contact me
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="col">
              <div className="social">
                <h4>Linked in :
                  {myResume.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}