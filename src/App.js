import React, { useState } from 'react';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
// items是随意取的名字，也可以叫menus
import items from './data';


//const allCategories = items.map(item => item.category)
//console.log(allCategories)
//数组相同元素的去重, es6方法
//也可以通过es6方法，在数组中添加新数据
const allCategories = ['all',...new Set(items.map(item => item.category))]
console.log(allCategories)
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)
  
  //实现过滤
  const filterMenu = (btnCategory) => {
    //设置全部item显示
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
