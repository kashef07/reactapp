import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css';
import medalimg from '../images/taskimg2.jpg';
import graphimg from '../images/taskimg3.jpg';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{backgroundColor:'#F0F0F0'}}>
      {/*side nav*/}
        <ul className='sidenav'>
            <li><i class='fa fa-home ' id="icon"></i></li>
            <li><i class='fa fa-bell ' id="icon"></i></li>
            <li><i class='fa fa-location-arrow ' id="icon"></i></li>
            <li><i class='fa fa-file-text-o icon' id="icon"></i></li>
            <li style={{marginTop:'330px'}}><i class='fa fa-user' id="icon"></i></li>
            <li><i class='fa fa-gear' id="icon"></i></li>
            <li><i class='fa fa-sign-out' id="icon"></i></li>
        </ul>

      {/*user div*/}  
        <div className='user'>
          <p style={{fontSize:'20px'}}>Welcome User!</p>
          <em style={{color:"red"}}>Check the calendar<br/>for today's schedule</em>
          <i class='fa fa-user' id="icon"></i>
        </div>

      {/*medal div */}  
      <div className='congrats'>
          
          <img src={medalimg} alt='medal img' className='img1'/>
          <p>Congrats!</p>

        <div className='sidediv'>
          <div className='sidediv1'>
            <span style={{fontSize:'12px',fontWeight:'bold'}}>TOTAL<br/>POINT<br/>EARNED</span>
            <span className='vl'></span>
            <span className='num'>+3150</span>
          </div>
          <div className='sidediv2' style={{marginTop:'5px'}}>
            <img src={medalimg} alt='medal img' className='img2'/>
            <h6>LEVEL1</h6>
          </div>
          <div className='sidediv2'>
            <img src={medalimg} alt='medal img' className='img2'/>
            <h6>LEVEL2</h6>
          </div>
          <div className='sidediv2'>
            <img src={medalimg} alt='medal img' className='img2'/>
            <h6>LEVEL3</h6>
          </div>
          <div className='sidediv2'>
            <img src={medalimg} alt='medal img' className='img2'/>
            <h6>LEVEL4</h6>
          </div>
          <hr></hr>
        </div>
           
      </div>

      {/*graph div*/}
      <div className='graph'>
        <p style={{marginTop:'30px'}}>Last 7 days</p>
        <p style={{marginTop:'-5px'}}><i class='fa fa-caret-up' style={{fontSize:'24px'}}></i>+22,12</p>
        <img src={graphimg} alt='graph img' className='img3'/>
      </div>

      {/*calendar div*/}
      <div className='calendiv'>
       <Calendar className='calen' onChange={onChange} value={value} />

       <div className='date'>
        <p><i class='fa fa-angle-left'></i> July 22,2021 <i class='fa fa-angle-right'></i></p>
       </div>

       <div className='sunrise'>
       <i class="fa fa-sun-o" style={{fontSize:'20px',paddingTop:'10px',color:'orange'}}></i> <span style={{paddingTop:'10px'}}>9am-10:30am</span>
       </div>
       <div className='sunrise2'>
       <i class="fa fa-sun-o" style={{fontSize:'20px',paddingTop:'10px',color:'orange'}}></i> <span style={{paddingTop:'10px'}}>10:30am-12am</span>
       </div>
       <div className='sunrise3'>
       <i class="fa fa-sun-o" style={{fontSize:'20px',paddingTop:'10px',color:'orange'}}></i> <span style={{paddingTop:'10px'}}>12am-1:30pm</span>
       </div>
       <div className='sunrise4'>
       <i class="fa fa-sun-o" style={{fontSize:'20px',paddingTop:'10px',color:'orange'}}></i> <span style={{paddingTop:'10px'}}>1:30pm-3pm</span>
       </div>

       <p style={{fontSize:'24px',marginTop:'90px'}}>Schedule</p>

       <div className='idmain'>
          <div className='id'>
            <p>CustomerID:1234</p>
            <p>Client:Khan</p>
            <p>Address:abdullah street,mount road</p>
          </div>

          <div className='icons'>
            <p>Repainting <i class="fa fa-paint-brush" style={{color:'blue'}}></i></p>
            <i class="fa fa-map-marker" id='mapicon'></i>
            <i class="fa fa-phone" id='phoneicon'></i>
          </div>
          <button className='btn2'>Proceed</button>
        </div>

      </div>      
      
     
    </div>
  );
}

export default MyApp;