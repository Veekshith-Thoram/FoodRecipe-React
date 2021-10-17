import React,{useEffect, useState} from "react"
import './App.css';
import Recipe from "./Recipe";

function App() {
  const APP_ID = "a17e2ba4";
  const APP_KEY = "5fcd7b2db2ff5e782ad7e08da65e9f23";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(()=>{
    getResponse();
  },[query])

  const getResponse = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} image={recipe.recipe.image} calorie={Math.trunc(recipe.recipe.calories)} key={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
