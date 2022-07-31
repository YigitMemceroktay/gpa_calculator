import './Dropdown.css'
import React,{useState} from 'react'


function Dropdown(width, height, options)
{
    const [visible,setVisible] = useState(false);
    return( 
        <div className='DropdownParent'>
        <button onClick={()=>{setVisible(!visible)}}>hello</button>
        {visible?
        <div className='DropdownMenu'>
            
        </div>:<></>}
        </div>

    )
}

export default Dropdown


