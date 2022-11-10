import React from 'react'
import FilterButtons from "./Filter"

export default function Search({text, setText, triggerSearch}){ 
    return (
        <>
          <header>
            <div className="search-container">
              <form className="example" onSubmit={
                (event) => {
                  event.preventDefault();
                  setText(event.target.elements[0].value);
                  triggerSearch();
                }
              }> 
                <input id='search__input' value={text} type="text" placeholder="Pokemon Search" name="search" 
                style={{padding:10}}
                onChange={
                  (e)=>setText(e.target.value)
                }
                />   
                <button type="submit"> 
                  <i className="search"></i>
                </button>
              </form>
            </div>
          </header>
        </>
      )
    }
        <div className="form-control">
            <FilterButtons />
            <input type="text" placeholder="Search" className="bg-transparent outline-none border-b-[2px]" />
        </div>
    


