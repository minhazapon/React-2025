import { useEffect } from "react"
import { useState } from "react"
import Details from "./ProductsDetails"


function Products() {

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return (
        <>
            <div className=" mt-20 mb-20 ml-16 mr-16 ">
                <div>
                    <p className=" text-center font-thin text-6xl text-gray-400">OUR PRODUCTS</p>
                </div>
                <div className=" flex justify-center mt-8">
                    <div className=" grid  md:grid-cols-3 gap-10 ">
                        {
                            product.map(product => <Details key={product.id} product={product}></Details>)
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Products
