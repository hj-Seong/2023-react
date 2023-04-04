import React, { Component } from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// 필터링된 값을 테이블로 출력
export class ProductTable extends Component {

  constructor(props){
    super(props)
  }
  render() {
    const {products} = this.props
    return (
      <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductCategoryRow />
                <ProductRow name={products[0].name} price={products[0].price} />
                {
                    products.map(
                        (product)=>
                        <ProductRow 
                            name={product.name} 
                            price={product.price}
                        />)
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable