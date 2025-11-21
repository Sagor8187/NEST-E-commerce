import React from 'react'

function Offercard() {
    const cards = [
        {image:"https://i.ibb.co.com/7dg94hm5/icon-1.png",title:"Best prices & offers",service:"Orders $50 or more"},
        {image:"https://i.ibb.co.com/0y8WBmQD/icon-2.png",title:"Free delivery",service:"24/7 amazing services"},
        {image:"https://i.ibb.co.com/R4Y9zJqW/icon-3.png",title:"Great daily deal",service:"When you sign up"},
        {image:"https://i.ibb.co.com/PvGPSSnf/icon-4.png",title:"Wide assortment",service:"Mega Discounts"},
        {image:"https://i.ibb.co.com/G4YSqsp3/icon-5.png",title:"Easy returns",service:"Within 30 days"}
    ]
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-2'>

        {cards.map((data,index)=>(
            
            <div 
                key={index} 
                className='flex items-center gap-2 p-2 shadow-lg rounded-xl bg-white hover:shadow-2xl transition-all duration-300'
            >
                
                <img 
                    src={data.image} 
                    alt={data.title} 
                    className='w-16 h-16 object-contain'
                />

                <div>
                    <h2 className='text-lg font-bold text-gray-800'>{data.title}</h2>
                    <p className='text-gray-500'>{data.service}</p>
                </div>

            </div>
        ))}

    </div>
  )
}

export default Offercard
