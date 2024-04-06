import './index.css'
const Products = (props) => {
    const {details} = props
    return(
        <div>
            {/* <li className="product-details">
            <p>Product</p>
            <p>Sold amount</p>
            <p>Unit price</p>
            <p>Revenue</p>
            <p>Rating</p>
            </li> */}
            
            <li className="product-details">
                <p className='productname'>{details.product}</p>
                <p>{details.soldAmount}</p>
                <p>{details.unitPrice}</p>
                <p>{details.revenue}</p>
                <p>{details.rating}</p>
                
            </li>
        </div>
    )
}

export default Products