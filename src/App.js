import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


function ImageFunc (props){
  
  const {testp,url}=props

console.log("_---Props",props)

//  props.myfunct();

  let count=0
  
  const custom_function=()=>{

    console.log("url",count)
  
   
      count=10

      console.log("url",count)

    }
  return (


            <>

               <h1  onClick={custom_function} >Welcome , {testp}</h1>
            
            <img src={url} alt="Logo" />
            
            </>
  );
  
  

}
class App extends Component {

  


  // constructor() {
    
   
  //   this.state = 
    
  //   {

  //       name:'Testing'

  //    };
   
  
  // }
  

  state={

      name:'Checko',
      input:"",
      lastename:"dhibi",
      age:10
  }
  hello_world(lxyz){
    this.setState({
      'name':lxyz,
       'lastename':"Tahir",
    })
    console.log(lxyz)
  }

  handleChange(event) {
    this.setState({'input': event.target.value});
  }

  render(){
    const {name,age,lastename,input}=this.state
    console.log(this.state)
    console.log(name)
    console.log(lastename)
  return (
    <div className="App">
        <h1  onClick={this.hello_world.bind(this,'dnisxdeh')}>Hello,{input}   age{age}</h1>

        <label>
          Nameee:
          <input type="text" value={input} onChange={this.handleChange.bind(this)  } />
        </label>



        <ImageFunc  myfunct={this.hello_world}   testp={input} url={'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png'} />
      
    </div>
  );
}
}



export default App;
