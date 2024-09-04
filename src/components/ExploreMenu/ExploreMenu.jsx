import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCatagory}) => {
  


  return (
    <div className='explore-menu' id='exploremenu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'> the original words and form of a written or printed work (2) : an edited or emended copy of an original work b : a work containing such text.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCatagory(prev=>prev===item.menu_name?"All":item.menu_name)}
                     key={index} className="explore-menu-items">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
            </div>    
            <hr/>  
    </div>
  )
}

export default ExploreMenu