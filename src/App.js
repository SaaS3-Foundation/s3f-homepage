import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
        {/* 页头 */}
        <div className='header'>
          <div style={{
            width:"100px", 
            height:"100px",
            marginRight:"150px"
          }}>
            <img src={logo} alt=""/>
          </div>
          <div className='navi'>
            <div style={{fontSize:"1.25rem"}}>About</div>
            <div style={{fontSize:"1.25rem"}}>About</div>
            <div style={{fontSize:"1.25rem"}}>About</div>
            <div style={{fontSize:"1.25rem"}}>About</div>
            <div style={{fontSize:"1.25rem"}}>About</div>
            <div style={{fontSize:"1.25rem"}}>About</div>
          </div>
        </div>
        {/* 标题 */}
        <div className='body'>
          <div style={{fontSize:"4rem"}}>
            We fund research and development teams who are building the foundation of the decentralized web. Join us.
          </div>
        </div>
        {/* 脚注 */}
        <div className='footer'>
          <div>
          Projects
          </div>
          <div>
          Privacy and Cookies
          </div>
          <div>
            Security Report
          </div>
          <div>
            © 2022 SaaS3 Foundation, All Rights Reserved.
          </div>
        </div>
    </div>
  );
}

export default App;
