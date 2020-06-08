import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'd4612704';
  const APP_KEY = '60c3839af320301c467b469307eb51a2';

  const [recipes, setRecipes] = useState([]);


  useEffect( ()=> {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
