// import react from 'react'

const Product = (props) => {
    
    return (
        <div>
            <p> Product Name: {props.title}</p>
            <p> Product Price: {props.Price}</p>
            <p>{props.children}</p>
            {/* <p>{JSON.stringify(props)}</p> */}
            
        </div>
    )
}


export default Product