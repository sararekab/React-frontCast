// import Wrapper from "./component/Wrapper";
// import reactDom from "react-dom";
import react from 'react'
import Product from './component/product/product';

class App extends react.Component {
  state = {
    products: [
      {title: 'Book1' , price:'99'},
      {title: 'Book2' , price:'89'},
      {title: 'Book3' , price:'59'}
    ],
    cars: [
      {title: 'car1' , price:'99'},
      {title: 'car2' , price:'89'},
      {title: 'car3' , price:'59'}
    ]

  }
 
  render() {
    return (
    <div id="main" className="container">
      <h2> React App</h2>
      {
        this.state.cars.map((product)=>{
          return (
            <Product title={product.title} Price={product.price} />
          )

        })
      }
     
      <button>Change Price</button>
    
    </div>
    )
  }

}
 





export default App;
