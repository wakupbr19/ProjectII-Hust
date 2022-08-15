import React, { useState, useEffect } from "react";
import './Ex2.css';

function Ex2() { 
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(`./imgData.json`)
        .then(response => response.json())
        .then(data => {
            setItems(data);
        }) 
    },[])

    return (
        <>
        <h2 className = 'ex2Title'>Bài tập 2: Hiển thị ảnh (image) theo lưới (Grid)</h2>
        <div className="grid-container-ex2">
        {items.map((item) => (
            <div className="grid-item-ex2">
            <img src = {item.img}
            alt = {item.title} 
            loading = "lazy"></img>
            </div>
        ))}
        </div>

        </>
    )
}
      
      
    
export default Ex2;