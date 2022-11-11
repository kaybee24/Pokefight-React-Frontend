import React, { useState } from 'react';
import './Theme.css';

const Theme = () => {

    const imgs = [
        { id: 0, value: "src/assets/bg_cave.jpg" },
        { id: 1, value: "src/assets/bg_forest.jpg" },
        { id: 2, value: "src/assets/bg_glacier.jpg" },
        { id: 3, value: "src/assets/bg_volcano.jpg" },
    ]
    const [bgImage, setbgImage] = useState(imgs[0])

    const handleClick = (index) => {
        const selectImage = imgs[index];
        setbgImage(selectImage)
    }
    return (
        <div className="background-el" style={{ backgroundImage: `url(${bgImage.value})` }}>
            <div className='flex'>
                {imgs.map((data, index) =>
                    <div className="thumbnail" key={index} >
                        <img
                            className={bgImage.id === index ? "clicked" : ""}
                            src={data.value}
                            onClick={() => handleClick(index)} />
                    </div>
                )}
            </div>
        </div >
    );
}

export default Theme;
