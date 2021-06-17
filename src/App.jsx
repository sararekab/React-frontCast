// import Wrapper from "./component/Wrapper";
// import reactDom from "react-dom";
import react from 'react'
import Product from './component/product/product';

class App extends react.Component {
 
  render() {
    return (
    <div id="main" className="container">
      <h2> React App</h2>
      <Product title='Book 1' Price='99' />
      <Product title='Book 2' Price='89'>
        Discount: 20%
      </Product>
      <Product title='Book 3' Price='70' />
      <buttom>Change Price</buttom>
    
    </div>
    )
  }

}
 





export default App;
