import React from 'react'

function Productapi(props) {
    return (

        <div className={props.activeprodect}>
            <div className='flex gap-4'>
                <div className='ms-[20px]'>
                    <p className='text-3xl font-bold text-gray-500'>Soft Toys</p><br />
                    <span className='text-2xl font-serif font-bold '>Showing 1-20 </span><span className='text-xl'>out of 714 products</span>

                    <div>
                        <select className='w-[300px] mt-4 outline-none border-2 border-gray-300 rounded text-xl' >
                            <option>Sort by : Relevance</option>
                            <option> New Arrivals </option>
                            <option>  Price (High to Low)</option>
                            <option>Price (Low to High)</option>
                            <option> Ratings</option>
                            <option >Discount</option>


                        </select>
                    </div>
                    <div className='w-[300px] h-[300px] border-2  border-gray-300 rounded mt-5'>
                        <p className='text-xl font-bold ms-3'>FILTERS</p>
                        <p className='ms-3'>673 Products</p>
                        <div className='w-[90%] h-[2px] bg-gray-400 m-auto ms-3 mt-3'></div>
                        <p className='text-xl font-bold ms-3 mt-3'>Category</p>

                    </div>
                </div>

                {/* second parts cards */}
                <div className='flex gap-4 flex-wrap'>
                    {
                props.productdata.map((productss,index) => (
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80" key={index}>
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img src= {productss.images} />
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            {productss.title}
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                               {productss.description}
                            </p>
                            <p className='font-bold text-xl'>{productss.category}</p>
                            <button className='text-2xl text-red-600 font-bold'>${productss.price}</button>
                        </div>
                        <div className="px-4 pb-4 pt-0 mt-2">
                            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                Read more
                            </button>

                        </div>

                    </div>

                    ))
                   
                } 

                </div>
            </div>
        </div>
    )
}

export default Productapi
