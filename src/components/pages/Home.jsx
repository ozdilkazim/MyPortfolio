import myResume from '/myresume';
export default function Home() {
    return (
      <section className="container-fluid home">
        <div className="container jumbotron">
          <h1 className="display-1 hello-big">Hello!</h1>
          <h1 className="display-3">I am {myResume.name}!</h1>
          <p className="lead">I am a {myResume.role}.{myResume.roleDescription}</p>
          <hr className="my-4" />
          <p>A passionate front-end web developer with a keen eye for creating visually stunning and intuitive user experiences.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
          </p>
        </div>
      </section>
    );
  }