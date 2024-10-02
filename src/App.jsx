import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {

    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [])
    return (
        <>
            <div className='flex flex-wrap gap-4 justify-center overflow-hidden'>
                {products && products.map(p => {


                    return (

                        <div key={p.id}  className='p-3 relative overflow-hidden space-y-2 w-[15em] bg-gray-200 flex flex-col rounded-2xl  max-sm:w-[80%]'>

                            <img src={p.image} alt="" className='w[100%] h-[60%]' />

                            <h1 className=' text-lg'>{p.title} </h1>
                            <h1 className='bg-green-400 px-3 rounded-full self-end '>{p.category}</h1>
                            <h1><span className='font-bold'>$ {p.price}</span> <span>{p.rating.rate}({p.rating.count})</span></h1>
                            <button className='mt-auto self-end  bg-purple-600 p-3 rounded-lg text-lg font-bold text-white'>Check Out</button>
                        </div>
                    )
                })
                }

            </div>

        </>
    )
}
export default App
