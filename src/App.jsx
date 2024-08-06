import './App.css'
import profImage from "./assets/prof.jpg";
import Vik from './components/Link';
import { FaLinkedin,FaGithub,FaReact  } from "react-icons/fa";


let linkedin={
    title:"LinkedIn",
    link:"https://www.linkedin.com/in/vikjs/",
    logo:<FaLinkedin/>,
    text :"vikjs"
}
let ghub={
    title:"Github",
    link:"https://github.com/xd-vik",
    logo:<FaGithub/>,
    text :"xd-vik"
}
let web={
    title:"Website",
    link:"https://imvik.vercel.app",
    logo:<FaReact/>,
    text :"imvik"
}



function App() {
  return (
    <>

        <div className="themenu">
            <div className="profile">
                <img className='prof-image' src={profImage} alt="" />
                <h2 className='name'>Vivek Kushwaha</h2>
                <p className='bio'>  A Frustrated Web Developer .</p>
            </div>
            <div className="links">
                <Vik
                title={linkedin.title}
                link={linkedin.link}
                logo={linkedin.logo}
                text={linkedin.text}
                />
                <Vik
                title={ghub.title}
                link={ghub.link}
                logo={ghub.logo}
                text={ghub.text}
                />
                <Vik
                title={web.title}
                link={web.link}
                logo={web.logo}
                text={web.text}
                />
            </div>
        </div>
    </>
  )
}

export default App
