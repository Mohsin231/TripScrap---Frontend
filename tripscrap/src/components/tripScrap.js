import React, {useState, Component} from 'react';
import Data from '../components/data'

class tripScrap extends Component{
    render(){
        return <div></div>
    }
}

function tripScrap() {

    const [data,setData] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        console.log("button clicked")
    }

  return (
    <h1>data</h1>
  );
  
}

export default tripScrap;