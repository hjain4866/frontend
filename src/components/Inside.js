import React from 'react'
import { Addurl } from './Addurl'
import { Urls } from './Urls'

export const Inside = () => {
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor="cadetblue";
  return (
    <div>
        <Addurl/>
        <Urls/>
    </div>
  )
}
