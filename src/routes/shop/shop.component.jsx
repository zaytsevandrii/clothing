import { useContext } from 'react'
import SHOP_DATA from '../../../src/shop-data.json'
import { ProductContext } from '../../components/contexts/products.context'
import ProductCard from '../../components/product-card/product-car.component'
import './shop-styles.scss'

const Shop =()=>{
    const {products} = useContext(ProductContext)
    return(
        <div className='products_container'>
            {products.map((product)=>(
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default Shop