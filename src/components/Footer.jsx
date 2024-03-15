import myResume from '/myresume';
export default function Footer() {
    return (
      <div className="container">
       <div className="row">
          <div className="social-links">
            <ul className="list-group">
              {
                myResume.socialLinks.map((item)=>{
                  return(
                    <li key={`${item.name}`} className="list-group-item">
                      <a href={item.url}>
                      <i className={item.className} />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
        </div>
       </div>
      </div>
    );
}