import React from 'react'
import { useState } from "react";
import Blogdetails from "./Blogdetails"

function Blogs() {
    const data = [
        {id:1,image :"https://i.ibb.co.com/TDHbqtRw/1403.png",category:"Side Dish",title :"The Intermediate Guide to Healthy Food",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:2,image :"https://i.ibb.co.com/CZ6mhPn/1407.png",category:"Soups and Stews",title :"Summer Quinoa Salad Jars with Lemon Dill",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:3,image :"https://i.ibb.co.com/qYv1DSry/1410.png",category:"Salad",title :"Caprese Chicken with Smashed Potatoes",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:4,image :"https://i.ibb.co.com/XZCykgB6/1414.png",category:"Dessert",title :"Harissa Chickpeas with Whipped Feta",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:5,image :"https://i.ibb.co.com/F22QRch/1417.png",category:"Breakfast",title :"Almond Butter Chocolate Chip Zucchini Bars",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:6,image :"https://i.ibb.co.com/60R3cQSP/1420.png",category:"Vegan",title :"Smoky Beans & Greens Tacos with Aji Verde",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:7,image :"https://i.ibb.co.com/SwW52Vvn/1424.png",category:"Gluten Free",title :"Sticky Ginger Rice Bowls with Pickled Veg",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:8,image :"https://i.ibb.co.com/ZzsvtQwB/1428.png",category:"Side Dish",title :"Creamy Garlic Sun-Dried Tomato Pasta",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:9,image :"https://i.ibb.co.com/21McSwPB/1431.png",category:"Dairy Free",title :"The Absolute Easiest Spinach and Pizza",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:10,image :"https://i.ibb.co.com/twDMhyjV/1434.png",category:"Salad",title :"Sticky Ginger Rice Bowls with Pickled",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:11,image :"https://i.ibb.co.com/TDHbqtRw/1403.png",category:"Soups",title :"The Best Soft Chocolate Chip Cookies",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:12,image :"https://i.ibb.co.com/8DS5ZmPP/1440.png",category:"Vegetarian",title :"Baked Mozzarella Chicken Rolls",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:13,image :"https://i.ibb.co.com/Ld1PrB7H/1443.png",category:"Dessert",title :"The Best Avocado Egg Salad",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:14,image :"https://i.ibb.co.com/YKRwC76/1446.png",category:"Vegetarian",title :"The litigants on the screen are not actors",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},
        {id:15,image :"https://i.ibb.co.com/35mZWgBG/1449.png",category:"Vegetarian",title :"The litigants on the screen are not actors",details :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit architecto id doloribus natus debitis aut, non iste ea laudantium libero obcaecati quae expedita officiis culpa iusto earum maxime aspernatur accusantium ipsa. Laboriosam modi totam iusto tenetur maiores vel a dolores voluptates similique neque iste repellat quisquam, necessitatibus vitae sunt!"},

    ]


        const [selectedBlog, setSelectedBlog] = useState(null); // কোন blog select হল
        const [isModalOpen, setIsModalOpen] = useState(false); // modal open/close state

        const openModal = (blog) => {
            setSelectedBlog(blog);
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setSelectedBlog(null);
            setIsModalOpen(false);
        };
  return (
    <div>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold m-5'> Recips Articles</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-5'>
            {
            data.map((item,index)=>(
                <div key={index} className="bg-white shadow-md rounded-xl p-3 hover:shadow-lg transition cursor-pointer text-center">
      
                        {/* cover */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-auto  object-cover rounded-lg"
                        />

                        {/* Small Info category */}
                        <p className="text-xs text-gray-500 mt-2">{item.category}</p>

                        {/* Title */}
                        <h3 className="text-sm font-semibold mt-1 line-clamp-2">
                            {item.title}
                        </h3>

                        

                        {/* Read More */}
                        <button onClick={() => openModal(item)} className="text-green-600 text-xs font-semibold mt-2 hover:underline">
                            Read More →
                        </button>
                </div>
            ))}
        </div>
         {selectedBlog && (
            
        <Blogdetails
          blog={selectedBlog}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default Blogs