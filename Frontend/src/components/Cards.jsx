import React from 'react'

function Cards({ item }) {
    // console.log(item)
    return (
        <>
            <div className='mt-6 my-6 p-5'>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-xl border-[1px] hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
//1:11:44

export default Cards
