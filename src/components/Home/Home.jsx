import MainPic from "../../images/MainPic.jpg";
import '../Home/Home.css'


function Home() {

    return (

            <div id="container">

                <div id="pic-title">

                <img id="main-pic" src={MainPic} alt="Subject pic" />
                <div id="titles">

                    <h1 id="main-title">We help you to find the best property for you</h1>
                    <h1 id="main-subtitle">
                        Find your dream house in few simple steps,<br></br>
                        all you need to do it is to enter your preferences down below
                        and we will already do the hard work for you</h1>

                    

                </div>

                </div>

            </div>




            

        
    )

}

export default Home