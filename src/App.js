import React, { useState } from 'react';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import items from './data';


const allCategories = ['all',...new Set(items.map(item => item.category))]
console.log(allCategories)
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories) 

  const filterMenu = (btnCategory) => {
    if (btnCategory === 'all') {
      setMenuItems(items);
      return
    }
    const newItems = items.filter(item => item.category === btnCategory)
    setMenuItems(newItems)
  }
  return (
    <main className="App">
      <section className='menu section'>
        <div className='title'>
          <h2>Delicious-Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterMenu} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
