import info from '../data.json'
import { Context } from "./context/context";
import { Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FavCard from "./components/FavCard/FavCard";
import FavPage from "./components/FavPage/FavPage";
import Home from './components/Home/Home';
import Layout from "./components/Layout/Layout";
import NoMatch from "./components/NoMatch/NoMatch";
import Properties from "./components/Properties/Properties";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import PropertyExtended from "./components/PropertyExtended/PropertyExtended";
import FilterBarProperties from './components/FilterBarProperties/FilterBarProperties'


function App() {

  const [data, setData] = useState([]);
  useEffect(() => { setData(info.results) }, [])

  const [favArr, setFavArr] = useState([]);
  console.log(favArr);

  const [savedUserChoises, setSavedUserChoises] = useState({});



  return (
    <div>
      <Context.Provider value={{ data, setData, favArr, setFavArr,savedUserChoises,setSavedUserChoises }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/favorite" element={<FavPage/>}></Route>
          <Route path="/properties" element={<Properties />}></Route>
          <Route path="/properties/:id" element={<PropertyExtended />}></Route>
          
          
        </Route>
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
