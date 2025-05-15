
import React, { useEffect, useState } from 'react';
//instalition
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//Components
import Button from '../../components/button';
import {addCart} from '../../components/cartUtils';
//Icons

import LineIllustrationOne from '../../icons/LineIllustrationOne';
import Star from '../../icons/star';
import Heart from '../../icons/Heart';
import Right from '../../icons/right';
import HotDog from '../../icons/HotDog';
import Pizza from '../../icons/Pizza';
import IceCream from '../../icons/IceCream';
import Ponchik from '../../icons/Ponchik';
//img
import imgFood from '../../Img/Food Image.png';
import imgFood2 from '../../Img/Food Image2.png';
import imgFood3 from '../../Img/Food Image3.png';
import ImgMoreBurger from '../../img/Mask Group.png';
import { data, Link, NavLink } from 'react-router-dom';
const Menu = () => {
//Hook UseState
const [border, setBorder] = useState('');
const [activeIndex, setActiveIndex] = useState(null);
const [checkRestaurants, setCheckRestaurants] = useState(true);
const [checkFoods, setCheckFoods] = useState(true);
const [search, setSearch] = useState('');
const [filterRestaurant, setFilterRestaurant] = useState([]);
const [filterDishes, setFilterDishes] = useState([]);
const [filterPrice, setFilterPrice] = useState(100);
const [addCartData, setAddCartData] = useState(() => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
});
const [featuredHook, setFeaturedHook] = useState([]);
const [idx, setIdx] = useState('');
//date Components
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
//UseEffect Func 
  useEffect(() => {
    setFilterRestaurant(restaurants);
    setFilterDishes(dishes);
  },[]);
//Filtered
  useEffect(() => {
    // Фильтрация ресторанов
    if(checkRestaurants) {
      const filtered = restaurants.filter((e) => 
      e.title.toLowerCase().includes(search.trim().toLowerCase())
      )
      setFilterRestaurant(filtered);
    }else setFilterRestaurant([]);
    // Фильтрация блюд
    if(checkFoods){
      const filtered = dishes.filter((e) => {
        let maxPrice = Number(e.price.replace('$',''));
        let searchRes = e.title.toLowerCase().includes(search.toLowerCase());
        let priceRes = maxPrice <= filterPrice;
        return searchRes && priceRes;
      })
      setFilterDishes(filtered)
    }
    else setFilterDishes([]);
      // Фильтрация блюд

    
  }, [search, checkRestaurants, checkFoods,filterPrice]);
//add to Cartd
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(addCartData));
  },[addCartData]);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
//Render
  return (
    <div className='bg-[#dceaf3] container mx-auto '>   
    {/*Filtered  */}
    <div className="bg-[#dceaf3] relative rounded-3xl flex flex-col md:flex-row items-start gap-6 py-6 pr-6 max-md:pr-0">
      {/* Promo Banner */}
      <LineIllustrationOne className={'absolute size-6 rotate-90 -top-0 -left-4'}/>
      <div className="flex flex-col w-full md:w-2/3 gap-6"> 
        <div className="relative slider rounded-3xl bg-[#e4eff5] max-sm:px-0 max-sm:py-4 max-sm:pr-2 text-[#6581ff] h-64 p-6 flex md:items-center justify-between overflow-hidden">
          <img src={ImgMoreBurger} alt={ImgMoreBurger} className='object-cover w-full h-full absolute' />
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            modules={[Pagination]}
            breakpoints={{
              0: {slidesPerView:1},
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {[
              {id:1, text:'55% OFF', date:'Weekend', img:imgFood},
              {id:2, text:'60% OFF', date:'BLACK FRIDAY', img:imgFood3},
              {id:3, text:'40% SALE', date:'ONLY FRIDAY', img:imgFood2},
              {id:4, text:'40% SALE', date:'ONLY FRIDAY', img:imgFood3}
            ].map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full w-full p-6 flex items-center justify-between">
                  <div className="flex-1 z-10">
                    <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-indigo-500">
                      {item.text}
                    </h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-500/30 -mt-2">
                      {item.date.toUpperCase()}
                    </h3>
                  </div>
                  <div className="z-10">
                    <img
                      src={item.img}
                      alt="promo dish"
                      className="w-36 h-36 md:w-40 md:h-40 object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Поиск  */}
        <div className="w-full mt-0 "> 
          <div className="flex items-center mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
            placeholder="Search ... (ch)"
            className="w-full rounded-xl px-4 py-3 border-2 border-transparent bg-gray-100 text-sm
                      focus:border-[#6581ff] focus:outline-none transition-colors duration-200"
          />
          </div>
        <div className="flex w-full rounded-xl overflow-hidden text-sm font-medium border border-[#6581ff]">
          <label className="w-1/2 flex items-center justify-center cursor-pointer">
            <input 
              type="checkbox" 
              name="searchType" 
              value="food" 
              className="hidden peer" 
              onChange={() => setCheckFoods(!checkFoods)}
              
            />
            <span className="w-full py-3 text-center bg-[#6581ff] text-white peer-checked:bg-white peer-checked:text-[#6581ff] transition-colors">
              Food
            </span>
          </label>
          
          <label className="w-1/2 flex items-center justify-center cursor-pointer">
            <input 
              type="checkbox" 
              name="searchType" 
              value="restaurant" 
              className="hidden peer" 
              onChange={() => setCheckRestaurants(!checkRestaurants)}
            />
            <span className="w-full py-3 text-center bg-[#6581ff] text-white peer-checked:bg-white peer-checked:text-[#6581ff] transition-colors">
              Restaurant
            </span>
          </label>
        </div>
        </div>
      </div>

      {/* Filter Sidebar */}
      <div className="bg-white max-sm:bg-transparent sm:shadow-lg cursor-pointer rounded-3xl sm:p-6 py-6 px-0 w-full md:w-1/3 space-y-6">
        {/* Category */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#6581ff]">Category</h4>
          <div className="flex gap-4">
            {[
              { id:1,name: 'Pizza', bg: 'bg-yellow-100',color:'#f8c185', icon: <Pizza/> },
              { id:2,name: 'Asian', bg: 'bg-red-100',color:'#d37777', icon: <HotDog/> },
              { id:3,name: 'Donat', bg: 'bg-amber-100',color:'#ffd29a', icon: <Ponchik/> },
              { id:4,name: 'Ice', bg: 'bg-blue-100',color:'#728cff', icon: <IceCream/> },
            ].map((item, i) => (
              <div
                key={item.id}
                onClick={() => setBorder(item.color)}
                className={`w-16 h-16 max-lg:w-[70px] max-lg:h-[35px] max-md:h-16 rounded-2xl flex flex-col items-center justify-center text-sm font-medium ${item.bg} 
                shadow`}
                style={border === item.color ? {border: `2px solid ${item.color}`} : {}}
              >
                <div className="text-xl ">{item.icon}</div>
                <span className={`max-lg:hidden max-md:block  
                ${item.color === '#ffd29a' ? 'text-amber-300' : `text-[${item.color}]`}`}
                >{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#6581ff]">Sort By</h4>
          <div className="flex justify-between text-gray-400 font-medium">
            <span className="cursor-not-allowed text-[18px] max-lg:text-[12px]">Recommended</span>
            <span className="text-[#728cff] cursor-pointer max-lg:text-[12px]">Fast Delivery</span>
          </div>
          <div className="mt-2 text-gray-400 cursor-not-allowed max-lg:text-[12px]">Most Popular</div>
        </div>

        {/* Price Slider */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#6581ff]">Price</h4>
          <input type="range" min="0" max="100" value={filterPrice} onChange={(e) => setFilterPrice(e.target.value) } className="w-full accent-[#728cff] focus:accent-[#617eff]" />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>$0</span>
            <span>$10</span>
            <span>$30</span>
            <span>$50</span>
            <span>$75</span>
            <span>$100</span>
          </div>
        </div>
        <Button text={'Apply'} className={' bg-[#728cff] w-full text-white'}/>
      </div>
    </div>
    {/* Restourants && Dashes */}
    <div className=" relative bg-[#e4eff5] sliderDishes rounded-3xl  font-poppins space-y-20 mt-20">
    {/* Restaurants */}
    
    {checkRestaurants === true && (
    <div className='p-8 pb-0'>
      <div className="flex justify-between items-center  mb-10">
        <h2 className="text-2xl md:text-3xl  my-4 font-semibold ">
          Our Top <span className="text-[#6581ff]">Restaurants</span>
        </h2>
        <Link to={'restourant/'}>
        <span className='flex justify-between items-center gap-2'>
          <span className='max-sm:hidden'>View All </span>
          <Right className ='size-6'/>
        </span>
        </Link>
      </div>
      

      <div className="grid gap-6 max-w-full grid-cols-3 max-sm:grid-cols-1 ">
        {filterRestaurant.map((r, i) => (
          <Link to={`restourant/${r.id}`} key={r.id}>
          <div  className="bg-white rounded-2xl shadow-[6px_71px_36px_0px_#d9e3e7] w-full shrink-0 overflow-hidden">
            <img src={r.image} alt={r.title} className="w-full h-40 object-cover" />
            <div className="p-4 space-y-2">
              <span className={`text-xs px-2 py-1 rounded-md ${r.tagColor}`}>{r.tag}</span>
              <h3 className="font-semibold text-lg">{r.title}</h3>
              <div className="text-sm text-gray-500 flex items-center gap-3">
                <span>{r.time}</span>
                <span className="text-[#6C5FBC] flex gap-1"><Star className={'size-4 fill-[#6C5FBC] stroke-0'}/> {r.rating}</span>
              </div>
            </div>
          </div>
          </Link>
        ))}
        
      </div>
        <div className="w-full h-0.5 bg-zinc-200 rounded-2xl my-20"></div>
    </div>)}

    {/* Dishes */}
    { checkFoods === true &&
    (
    <div className='sm:p-8 p-0'>
      <div className="flex justify-between px-8 items-center  mb-10">
        <h2 className="text-2xl md:text-3xl  my-4 font-semibold ">
          Our Top <span className="text-[#6581ff]">Dishes</span>
        </h2>
        <Link to={'restourant/'}>
        <span className='flex justify-between items-center gap-2'>
          <span className='max-sm:hidden'>View All</span> 
          <Right className ='size-6'/>
        </span>
        </Link>
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
        {filterDishes.map((dish, i) => (
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
      
    </div>
    )}
    

    </div>
    <div className="w-full h-0.5 my-20 bg-zinc-200 rounded-2xl "></div>
    {/* FQS */}
    <div className="max-w-full my-20 mx-auto p-6  bg-[#e4eff5] rounded-3xl shadow-md">
      
        <div className=" text-center relative mb-10">
          <h2 className="text-2xl md:text-3xl relative my-4 font-semibold ">
            Frequently Asked <br /> <span className="text-[#6581ff]">Questions</span>
            
          </h2>
          <LineIllustrationOne className="mx-auto animate-pulse rotate-180 md:translate-x-42 md:-translate-y-28 max-md:size-6 translate-x-31 -translate-y-23 " />
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

export default Menu