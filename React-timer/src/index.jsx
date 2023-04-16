import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';


  const App = () =>{
   const [currentTime, setCurrentTime] = useState(0);
   const styles = {
    center:{textAlign:'center',
    justifyContext:'center'}
   }
   useEffect(()=>{
   const timer = setInterval(() => {
      let d = new Date();
      setCurrentTime(d.toLocaleTimeString())
    },1000);
    return ()=>{ clearInterval(timer);
    }
   },[])
  return(
    <div>
      <h1 style={styles.center}>Your digital watch</h1>
      <h3 style={styles.center}>{currentTime}</h3>
     
    </div>
    )
  }

 
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );

 export default App;