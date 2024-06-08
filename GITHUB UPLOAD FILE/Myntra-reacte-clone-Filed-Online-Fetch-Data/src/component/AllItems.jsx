import React from 'react'
import HomeItems from './HomeItems'
import { useSelector } from 'react-redux'

const AllItems = () => {

 const items = useSelector(store => store.item)
  
  return (
    <main>
    <div className='items-container'>
      {items.map(item => <HomeItems key={item.id} item={item} />)}
    </div>
    </main>
  )
}

export default AllItems
