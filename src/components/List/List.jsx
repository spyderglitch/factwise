import React from 'react'

import UserAccordian from '../UserAccordian/UserAccordian';
import Celebs from '../../data/celebrities.json'

let celebs = require('../../data/celebrities.json');
console.log(celebs);

const List = () => {
  return (
    <div>
      {
        celebs.map((celeb)=>{
          return <UserAccordian key={celeb.id} celeb={celeb} />
        })
      }
        
    </div>
  )
}

export default List;