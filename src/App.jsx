import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

export default function App({title,prep,cook,serves,difficulty,type,img})
{
  return(
    <div className="card">
       <Header title={title} prep={prep} cook={cook}/>
       <Body serves={serves} difficulty={difficulty} type={type} img={img}/>
       <Footer/>
    </div>
  )
}