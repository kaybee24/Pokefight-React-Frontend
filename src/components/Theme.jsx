import React from 'react'

const Theme = () => {
    const handleOnClick = () => {
        document.body.style.backgroundImage = "url('src/assets/bg_forest.jpg')"
    }
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} id="theme-toggle" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full"><img src="src/assets/bg_cave.jpg" /></div>
            </label>
            <ul tabIndex={0} className="shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-40">
                <li><a onClick={() => handleOnClick()} className="justify-between"><img className="rounded-full" src="src/assets/bg_forest.jpg" /></a></li>
                <li><a onClick={() => handleOnClick()}><img className="rounded-full" src="src/assets/bg_volcano.jpg" /></a></li>
                <li><a onClick={() => handleOnClick()}><img className="rounded-full" src="src/assets/bg_glacier.jpg" /></a></li>
            </ul>
        </div>
    )
}

export default Theme