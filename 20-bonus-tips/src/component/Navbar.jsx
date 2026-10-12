import React from 'react'


const Navbar = (props) => {
  function changeTheme() {
    props.setTheme('Dark')
  }
    
    
  return (
    <div>
        
        <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar