// import Wrapper from "./component/Wrapper";
// import reactDom from "react-dom";
import react from 'react'
import Product from './component/product/product';

class App extends react.Component {
  state = {
    products: [
      {title: 'Book1', price: '59'},
      {title: 'Book2', price: '49'},
      {title: 'Book3', price: '39'}
    ],
  }

  changePriceHandler = () => {
    this.setState({
      products: [
        {title: 'Book1', price: '44'},
        {title: 'Book2', price: '44'},
        {title: 'Book3', price: '44'}
      ],

    })

  }
  render() {
    return (
    <div id="main" className="container">
      <h2> React App</h2>
      <Product 
      title = {this.state.products[0].title}
      price = {this.state.products[0].price}
      />
       <Product 
      title = {this.state.products[1].title}
      price = {this.state.products[1].price}
      />
       <Product 
      title = {this.state.products[2].title}
      price = {this.state.products[2].price}
      />
     
      <button onClick={this.changePriceHandler}>Change Price</button>

                
    </div>
    )
  }

}
 





export default App;
