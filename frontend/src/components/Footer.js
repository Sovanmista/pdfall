import React from 'react'
import {Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer roboto-light'>
      <div style={{margin:30, padding:30}}>
       <h3 className='roboto-light'>Contact Me....</h3> 
       <div className='icons'>
       <li><Link to="https://www.facebook.com/profile.php?id=61551930517925&mibextid=JRoKGi"><img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="" /></Link></li>
       <li><Link to="https://www.instagram.com/susovan_mishra_/"><img src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid" alt="" /></Link></li>
       <li><Link to="https://github.com/Sovanmista"><img src="https://icon-library.com/images/git-hub-icon/git-hub-icon-18.jpg" alt="" /></Link></li>
       <li><Link to="https://in.linkedin.com/in/susovan-mishra-ab6998248"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></Link></li>
       </div>
       <div>
        <h4 className='roboto-light'>
          Address: Garhbeta, Paschim Medinipur , West Bengal, 721127
        </h4>
        
        <h6 className='roboto-light' style={{marginTop: "10px"}}>
          Email :
        </h6>
        <h6 style={{textDecoration:"none"}}>
          <a className="roboto-light"style={{textDecoration:'none', color: "blue"}} href="mailto:susovanmishra0900@gmail.com">susovanmishra0900@gmail.com</a>
        </h6>
        <h6 className='roboto-light' style={{marginTop: "10px"}}>
          Phone :
        </h6>
        <h6 className="roboto-light"style={{color: "blue"}}>
          +91 8972683565
        </h6>
       </div>
       
      </div>
      <div id='contact' className='footermessage'>
        <h3 className='roboto-regular'>Drop a message</h3>
        <div>
            <form action="">
            <input  placeholder='enter your email id' style={{width:300, height:30, borderRadius:5, textAlign:"center", marginTop:20, border:"none"}} type="text" name="" id="" />
            <textarea style={{height:70, width:260,resize:"none", padding:20, display:"flex", marginTop:20, borderRadius:10, border:"none"}} name="" id=""></textarea>
            <button type='submit' style={{height:30, width:70, marginTop:20, borderRadius:5,border:"none", cursor:"pointer", backgroundColor:"red", color:"white" }}>Send</button>
            </form>
          
        </div>
      </div>

    </div>
  )
}

export default Footer
