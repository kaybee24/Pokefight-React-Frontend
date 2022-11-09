import React from 'react'

export default function Search({text, setText, triggerSearch}){ 
    return (
        <>
          <header>
            <div>
              <h1> Pokemon Search </h1>
            </div>  
            <div className="search-container">
              <form className="example" onSubmit={
                (event) => {
                  event.preventDefault();
                  setText(event.target.elements[0].value);
                  triggerSearch();
                }
              }> 
                <input id='search__input' value={text} type="text" placeholder="Pokemon Search°" name="search" 
                style={{padding:10}}
                onChange={
                  (e)=>setText(e.target.value)
                }
                />   
                <button type="submit"> 
                  <i className="search">Search</i>
                </button>
              </form>
            </div>
          </header>
        </>
      )
    }
    
    


