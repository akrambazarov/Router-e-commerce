import React, { useEffect, useState } from 'react';
//instalition
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { data, Link, NavLink } from 'react-router-dom';
 //Router
import { useParams, useNavigate, Navigate} from 'react-router-dom';
//Components
import {addCart} from '../../components/cartUtils';
//Icons
import Right  from '../../icons/right';
import Star from '../../icons/star';
import LineIllustrationOne from '../../icons/LineIllustrationOne';
import Heart from '../../icons/Heart';
//img
import imgFood from '../../Img/Food Image.png';
import imgFood2 from '../../Img/Food Image2.png';
import imgFood3 from '../../Img/Food Image3.png';

const FoodsRestourants = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
const restaurants = [
    {
    id:1,
    title: "The Chicken King",
    tag: "Healthy",
    tagColor: "bg-yellow-200 text-yellow-600",
    image: imgFood,
    time: "24min",
    rating: "4.8",
    },
    {
    id:2,
    title: "The Burger King",
    tag: "Trending",
    tagColor: "bg-red-200 text-red-600",
    image: imgFood2,
    time: "24min",
    rating: "4.9",
    },
    {
    id:3,
    title: "The Chicken King",
    tag: "Healthy",
    tagColor: "bg-yellow-200 text-yellow-600",
    image: imgFood3,
    time: "24min",
    rating: "4.8",
    },
];
const dishes = [
    {
    id:1,
    title: "Chicken Hell",
    tag: "Healthy",
    tagColor: "bg-yellow-200 text-yellow-600",
    price: "$12.99",
    image: imgFood,
    time: "24min",
    rating: "4.8",
    quantity:'0',
    },
    {
    id:2,
    title: "Swe Dish",
    tag: "Trending",
    tagColor: "bg-red-200 text-red-600",
    price: "$19.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:3,
    title: "Swe Dish",
    tag: "Supreme",
    tagColor: "bg-green-200 text-green-600",
    price: "$79.99",
    image: imgFood3,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:4,
    title: "Chicken Hell",
    tag: "Healthy",
    tagColor: "bg-yellow-200 text-yellow-600",
    price: "$92.99",
    image: imgFood,
    time: "24min",
    rating: "4.8",
    quantity:'0',
    },
    {
    id:6,
    title: "Swe Dish",
    tag: "Trending",
    tagColor: "bg-red-200 text-red-600",
    price: "$45.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:7,
    title: "Swe Dish",
    tag: "Healthy",
    tagColor: "bg-yellow-200 text-yellow-600",
    price: "$78.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:8,
    title: "Swe Dish",
    tag: "Supreme",
    tagColor: "bg-green-200 text-green-600",
    price: "$40.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:5,
    title: "Swe Dish",
    tag: "Trending",
    tagColor: "bg-red-200 text-red-600",
    price: "$11.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:9,
    title: "Swe Dish",
    tag: "Supreme",
    tagColor: "bg-green-200 text-green-600",
    price: "$33.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
    {
    id:10,
    title: "Swe Dish",
    tag: "Healthy",
    tagColor: "bg-yellow-200 text-yellow-600",
    price: "$99.99",
    image: imgFood2,
    time: "34min",
    rating: "4.9",
    quantity:'0',
    },
];
const faqs = [
{
    question: "How long does delivery take?",
    answer: "Delivery typically takes between 30-45 minutes depending on your location and current order volume."
},
{
    question: "How Does It Work?",
    answer: "Simply browse our menu, select your items, checkout, and we'll prepare and deliver your order to your doorstep."
},
{
    question: "How does your food delivery service work?",
    answer: "Our service connects you with local restaurants. You order through our platform, and we handle the delivery."
},
{
    question: "What payment options do you accept?",
    answer: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery."
},
{
    question: "Do you offer discounts or promotions?",
    answer: "Yes! We regularly run promotions and offer discounts for first-time users. Check our promotions page for current offers."
}
];
  //Hooks
  //useState
const [addCartData, setAddCartData] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});

//useEffect
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(addCartData));
}, [addCartData]);

const toggleFAQ = (index) => {
setActiveIndex(activeIndex === index ? null : index);
};
  return (
    <div className='sm:p-8 p-0 container mx-auto'>
      <div className="flex justify-between px-8 items-center  mb-10">
        <h2 className="text-2xl md:text-3xl  my-4 font-semibold ">
          Our Top <span className="text-[#6581ff]">Dishes</span>
        </h2>
        
        <span onClick={() => navigate(-1)} className='flex justify-between items-center gap-2'>
            <Right className ='rotate-180 size-6'/>
        </span>
        
      </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3} 
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1 
            },
            640:{
              slidesPerView: 1,
              slidesPerGroup: 1 
            },

            768: {
              slidesPerView: 2,
              slidesPerGroup: 2 
            },
            
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
        {restaurants.map((dish, i) => (
          <SwiperSlide key={dish.id}>
          <div className="bg-white rounded-2xl shadow-[6px_71px_36px_0px_#d9e3e7] w-full shrink-0 overflow-hidden">
            <Link to={`${dish.id}`} key={dish.id}>
            <img src={dish.image} alt={dish.title} className="w-full h-40 object-cover" />
            </Link>
            <div className="p-4 space-y-2 flex items-center justify-between gap-4 w-full">
              
              <h3 className="font-semibold md:text-[16px] text-xs">{dish.title}</h3>
               <span className={`md:text-[16px] text-xs px-2 py-1 rounded-md ${dish.tagColor}`}>{dish.tag}</span>
              <div className="text-sm text-gray-500 flex items-center gap-3">
                <span className='md:text-xl text-xs'>{dish.time}</span>
                <span className="text-[#6C5FBC] flex gap-1"><Star className={'size-4 fill-[#6C5FBC] stroke-0'}/> {dish.rating}</span>
              </div>
             
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      <Swiper
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3} 
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1 
            },
            380:{
              slidesPerView: 2,
              slidesPerGroup: 2 
            },

            768: {
              slidesPerView: 3,
              slidesPerGroup: 3 
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4 
            },
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
        {dishes.map((dish, i) => (
          <SwiperSlide>
          <div key={dish.id} className="bg-white  rounded-2xl shadow-[6px_71px_36px_0px_#dceaf3]  shrink-0 p-4 space-y-3 relative">
            <div className="flex justify-center">
              <img src={dish.image} alt={dish.title} className="w-24 h-24 rounded-full object-cover" />
            </div>
            <span className={`text-xs px-2 py-1 rounded-md ${dish.tagColor}`}>{dish.tag}</span>
            <h3 className="font-semibold text-lg">{dish.title}</h3>
            <div className="text-sm text-gray-500 flex items-center gap-3">
              <span>{dish.time}</span>
              <span className="text-purple-600 flex gap-2 items-center"><Star className={'size-4'}/> {dish.rating}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="font-semibold text-lg">{dish.price}</span>
              <button
              onClick={() => addCart(dish.id, addCartData, setAddCartData)}
              className="w-8 h-8 rounded-full bg-gray-800 text-white text-lg">+</button>
            </div>
            <div
            onClick={() => featuredProduct(dish.id)} 
            className="absolute top-4 right-4 text-gray-400"><Heart className={'size-4 stroke-red-500'}/></div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
    {/* FQS */}
    <div className="max-w-full my-20 mx-auto p-6  bg-[#e4eff5] rounded-3xl shadow-md">
      
        <div className=" text-center relative mb-10">
          <h2 className="text-2xl md:text-3xl relative my-4 font-semibold ">
            Frequently Asked <br /> <span className="text-[#6581ff]">Questions</span>
            
          </h2>
          <LineIllustrationOne className="mx-auto rotate-180 md:translate-x-42 md:-translate-y-28 max-md:size-6 translate-x-31 -translate-y-23 " />
        </div>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 pb-4 w-full relative"
          >
            <button
              className="flex justify-between items-center w-[90%] text-left gap-4 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium max-sm:text-[14px] text-black hover:text-blue-600">
                {faq.question}
              </h3>
              <span className=" bg-[#6581ff] rounded-full absolute translate-x-2 right-0 text-white h-6 w-6 flex justify-center items-center p-0  text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            
            {activeIndex === index && (
              <div className="mt-2 text-gray-600 max-sm:text-[14px]">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
    </div>
  )
}

export default FoodsRestourants