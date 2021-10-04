import React from 'react';

const Categories = ({ filterMenu, categories }) => {
    console.log()
    return (
        <div className='btn-container'>
            {categories.map((category,i) => {
                return(
                    <button className='filter-btn' key={i}
                            onClick={()=> filterMenu(category)}>{category}</button>
                )
            })}
        </div>
    )
}

export default Categories;