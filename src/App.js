import NavBar from "./components/NavBar";
import ProfileCard from "./ProfileCard";
import img1 from "./img/fotoMascota1.jpg"
import img2 from "./img/fotoMascota2.jpg"
import img3 from "./img/fotoMascota3.jpg"
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
{/* 

    <div class="container">

      <section className="section">

        <div className="columns">
          <div className="column is-4">
            <ProfileCard nombre="alexa" tag="alexa66" url={img1}/>
          </div>
        </div>

          <div className="column is-4">
            <ProfileCard nombre="google nest" tag="google 88" url={img2}/>
          </div>

          <div className="column is-4">
            <ProfileCard nombre="siri" tag="siri 77" url={img3}/>
          </div>

      </section>
    </div> */}

    </div>
    
  );
}

export default App;
