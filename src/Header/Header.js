import React from 'react'
import './Header.css'
import calculator from '../images/calculator.png'
function Header()
{
return(
<div className="Header">

<span className='Title'>GPA Calculator</span>
<img src={calculator} className="TitleImage"/>
</div>


)



}


export default Header;



