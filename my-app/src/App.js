import logo from './logo.svg';
import './App.css';
import Data from './Data';
import Category from './category';
import Nav from './Nav';
import React from 'react';
function App() {
/// since we map category we get all categories with extra of them so we use new Set to reduce category and remove
//extra categories and add all as it is the also categorical button .
  const cat= ["all",...new Set((Data.map((item)=>{
    return item.category
  })))]
  
  function filterItems(categ){
    console.log(categ)
    if(categ=="all"){
      return setData(Data)
    }
    const newData=Data.filter((info)=>info.category===categ)
    setData(newData)
  }
 
 
  
  const [data,setData]=React.useState(Data);
  const[categories,setCategories]=React.useState(cat)
  console.log(categories)
  return (
    <>
       <header>
      <h2>OUR MENU</h2>
      <div className="under"></div>
        <nav>
     <Nav  categories={categories}   handleClick={filterItems}/>
     </nav>
    </header>
    
    <main className="grid">
    {data.map((items)=>{
return  <Category {...items} key={items.id} />
    })}
    
    
    </main>
    </>
  );
}

export default App;
