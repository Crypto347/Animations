import React,{
   Component
} from 'react';
import List from "./list";
import Form from "./form";
import './app.scss'

export class App extends Component {
   render(){
      return(
         <div className="abc">
               <Form/>
         </div>
      );
   }
}

export default App