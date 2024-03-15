import myResume from '/myresume';
export default function Contact() {
    return (
      <section className="container" id="contact">
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
                <h4>Linkedin : &nbsp;
                  <a href={`https://www.linkedin.com/in/${myResume.linkedinId}`} target="_blank">Kazim Ozdil</a>
                </h4>
                <h4>Github : &nbsp;
                  <a href={`https://github.com/${myResume.githubId}`} target="_blank">{myResume.githubId}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
}