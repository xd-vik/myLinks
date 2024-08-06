import "../App.css"
const Link = ({title,logo,link,text}) =>{
    return(
        <div className="link-container">
        <p className="title">{title}</p>
            <a className="link" href={link} target="_blank">     <span className="logo">{logo} </span>
            <span className="text">{text}</span>
            </a>
        </div>
    )
}

export default Link;
