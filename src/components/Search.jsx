import React from 'react'
import FilterButtons from "./Filter"

const Search = () => {
    return (
        <div className="form-control">
            <FilterButtons />
            <input type="text" placeholder="Search" className="bg-transparent outline-none border-b-[2px]" />
        </div>
    )
}

export default Search