import React, { useState, useEffect } from 'react';
//instalition
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';
import { data, Link, NavLink } from 'react-router-dom';
//Function
import {addCart} from '../../components/cartUtils';
//Icons
import Button from '../../components/button';
import LineArrow from '../../icons/LineArrow';
import LineIllustrationOne from '../../icons/LineIllustrationOne';
import LineIllustrationTwo from '../../icons/LineIllustrationTwo';
import LineArrowTwo from '../../icons/LineArrowTwo';
import Star from '../../icons/star';
import Search from '../../icons/search';
import Line from '../../icons/Line';
import Heart from '../../icons/Heart';
import Right from '../../icons/right';

//img
import imgFood from '../../Img/Food Image.png';
import imgFood2 from '../../Img/Food Image2.png';
import imgFood3 from '../../Img/Food Image3.png';
import imgGraphik from '../../Img/Graph.png';
import mobile from '../../Img/Mobile.png';
import ImgMoreBurger from "../../Img/bgPng.png";


const Home = () => {
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
  const ControlPurchases = [
  { name: "Chicken Hell", status: "On The Way", time: "3:09 PM", statusColor: "text-green-500", image: imgFood },
  { name: "Swe Dish", status: "Delivered", time: "Yesterday", statusColor: "text-purple-600", image: imgFood2 },
  { name: "Fish Hell Veg", status: "Cancelled", time: "Yesterday", statusColor: "text-red-500", image: imgFood3 },
  ];
  
  return (

    <div className="container mx-auto">
      {/*Hero Content */}
      <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex gap-4 items-center text-[#676767] relative tracking-[3px] px-3 py-1 rounded-full text-sm">
             <h4 className='w-12 h-0.5 bg-[#676767] rounded-2xl'></h4>
             <h4>OVER 1000 USERS</h4>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-14 text-gray-800 mb-6">
              Enjoy Foods All<br />
              Over The <span className="text-[#728cff]">World</span>
            </h1>
            <p className=" text-[#676767] mb-8 max-w-lg">
              EatLy help you set saving goals, earn cash back offers, Go 
              to disclaimer for more details and get paychecks up to two 
              days early. Get a <span className='text-[#728cff]'>$20 bonus</span>.
            </p>
            <div className="flex space-x-4 ">
                <Button text={'Get Started'} className={'shadow-2xl bg-[#6581ff] hover:bg-[#728cff] transition-all text-[#ffffff]'}/>
                <Button text={'Go Pro'} className={'border-[#728cff] border-1 text-[#728cff]'}/>

            </div>
            <div className='flex my-4 items-center space-x-1 md:flex-col md:items-start'>
              <div className="flex items-center">
              <Star className={'size-8 fill-[#00B67A] stroke-0'}/>
              <span className='font-semibold mx-2'>TrustPilot</span>
              </div>
              <div className="flex ml-2">
              <Star className={'size-6 fill-[#F59E0B] stroke-0'}/>
              <Star className={'size-6 fill-[#F59E0B] stroke-0'}/>
              <Star className={'size-6 fill-[#F59E0B] stroke-0'}/>
              <Star className={'size-6 fill-[#F59E0B] stroke-0'}/>
              <Star className={'size-6 fill-[#F59E0B] stroke-0'}/>
              <span className='text-[#334155] mx-2'>4900+</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 max-md:py-20">
          {/* изображение еды */}

          <div className="h-64 md:h-96 rounded-lg relative flex items-center justify-center">
            
           
            <div className="bg-[#728cff] rounded-full scale-90 md:scale-100 relative w-full h-full max-w-[300px] max-h-[300px]">
              <img 
                src={`${imgFood}`} 
                alt={`${imgFood}`} 
                className="object-cover w-full h-full transform translate-x-[-12px] translate-y-[12px] rounded-full "
              />

              <LineArrow className='absolute -right-10 top-20 size-16'/>
              <img src={`${imgGraphik}`} alt={`${imgGraphik}`} className='object-cover w-full h-full absolute top-[135px] right-[145px] scale-75 max-md:top-[120px] max-md:right-[90px] max-md:scale-90' />
              <LineIllustrationOne className='max-md:size-5 absolute bottom-[-95px] left-[-120px] max-md:bottom-[-90px] max-md:left-[-80px]'/>
              <LineIllustrationTwo className='absolute top-[-65px] right-[-35px] max-md:top-[-40px] max-md:right-[-120px] size-6 max-sm:top-[-120px] max-sm:right-[0px]'/>
              {/* {img Block Top} */}
              <div className='flex h-20 w-70 absolute transform translate-x-[60px] translate-y-[-340px] max-md:translate-y-[-280px] z-10 shadow justify-between p-2 overflow-hidden gap-3 rounded-2xl bg-white max-sm:translate-x-[-70px] max-sm:translate-y-[-360px]'>
              <div className="flex items-center gap-3 ">
                <img src={imgFood} alt={imgFood} width={75} />
                <div className="">
                  <h4>Chicken Hell</h4>
                  <span className='text-[10px] text-[#3e3e3e] '>On The Way</span>
                </div>
              </div>
                <span className='text-[#ACADB9] absolute right-2 bottom-2'>3:09 PM</span>
              </div>
            </div>
            
          </div>
          </div>
      </div>
      {/* Features */}
      <section className=" relative bg-[#6581ff] overflow-hidden font-poppins my-20">
        <Line className='absolute size-70 max-md:top-[58%]'/>
        <Line className='absolute size-60 md:-top-15 -right-8 -top-1/5'/>
        <Line className='absolute size-60 md:top-4 md:-right-10 top-[-60px] right-[-30px]'/>
        <Line className='absolute size-60 top-20 max-md:top-[72%]'/>
        <div className="container re mx-auto z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 relative">
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-white/50"></div>
              <h3 className="text-4xl font-bold text-white mb-2">10K+</h3>
              <h4 className="text-xl font-semibold text-white mb-2">Satisfied Costumers</h4>
              <p className="text-[#C5C5C5]">All Great Over The World</p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 relative">
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-white/50"></div>
              <h3 className="text-4xl font-bold text-white mb-2">4M</h3>
              <h4 className="text-xl font-semibold text-white mb-2">Healthy Dishes Sold</h4>
              <p className="text-[#C5C5C5]">Including Milk Shakes Smooth</p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-white mb-2">99.99%</h3>
              <h4 className="text-xl font-semibold text-white mb-2">Reliable Customer Support</h4>
              <p className="text-[#C5C5C5]">We Provide Great Experiences</p>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Quality */}
      <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 max-md:py-20">
          {/* изображение еды */}

          <div className="h-64 md:h-96 rounded-lg relative flex items-center justify-center">
            
           
            <div className=" w-full h-full max-w-[300px] relative max-h-[380px]">
              <LineIllustrationOne className='absolute animate-pulse left-45 -top-6 size-8 transform rotate-180 max-md:left-38 max-md:-top-20'/>
              <img 
                src={`${mobile}`} 
                alt={`${imgFood}`} 
                className="object-cover max-md:scale-140 h-full  "
              />

              
              {/* {img Block Top} */}

            </div>
            
          </div>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
          <ul className='list-none md:list-disc'>
            <li className='list-none'>         
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-14 text-gray-800 mb-6">
              Premium <span className="text-[#728cff] animate-pulse absolute ml-3">Quality</span><br />
              For Your Health 
              </h1>
            </li>
            <li className='text-[#676767] my-3 max-w-lg'>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
            <li className='text-[#676767] '>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
          </ul>
            <div className="flex space-x-4 my-4 relative ">
                <Button text={'Downloaded'} className={'shadow-2xl max-h-12 bg-[#6581ff] hover:bg-[#728cff] transition-all text-[#ffffff]'}/>
                <LineArrowTwo className={'size-20'}/>
            </div>

          </div>

      </div>
      <div className="p-8 relative bg-[#e4eff5] rounded-2xl  font-poppins space-y-20 mt-20">
      {/* Restaurants */}
      <div>
      <div className="flex justify-between items-center  mb-10">
        <h2 className="text-2xl md:text-3xl  my-4 font-semibold ">
          Our Top <span className="text-[#6581ff]">Restaurants</span>
        </h2>
        <Link to={'Menu/restourant/'}>
        <span className='flex justify-between items-center gap-2'>
          <span className='max-sm:hidden'>View All </span>
          <Right className ='size-6'/>
        </span>
        </Link>
      </div>

        <div className="grid gap-6 max-w-full grid-cols-3 max-sm:grid-cols-1 ">
          {restaurants.map((r) => (
            
            <div key={r.id} className="bg-white rounded-2xl shadow-[6px_71px_36px_0px_#d9e3e7] w-full shrink-0 overflow-hidden">
              <Link to={`Menu/restourant/${r.id}`} >
              <img src={r.image} alt={r.title} className="w-full h-40 object-cover" />
              </Link>
              <div className="p-4 space-y-2">
                <span className={`text-xs px-2 py-1 rounded-md ${r.tagColor}`}>{r.tag}</span>
                <h3 className="font-semibold text-lg mt-1.5">{r.title}</h3>
                <div className="text-sm text-gray-500 flex items-center gap-3">
                  <span>{r.time}</span>
                  <span className="text-[#6C5FBC] flex gap-1"><Star className={'size-4 fill-[#6C5FBC] stroke-0'}/> {r.rating}</span>
                </div>
              </div>
            </div>
            
          ))}
         
        </div>
         <div className="w-full h-0.5 bg-zinc-200 rounded-2xl my-20"></div>
      </div>
      </div>
 {/* Dishes */}
      <div className='sm:p-8 p-0'>
        <div className="flex justify-between px-8 items-center  mb-10">
          <h2 className="text-2xl md:text-3xl  my-4 font-semibold ">
            Our Top <span className="text-[#6581ff]">Dishes</span>
          </h2>
          <Link to={'Menu/restourant/'}>
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
            {dishes.map((dish) => (
              <SwiperSlide>
              <div key={dish.id} className="bg-white  rounded-2xl shadow-[6px_71px_36px_0px_#dceaf3]  shrink-0 p-4 space-y-3 relative">
                <div className="flex justify-center">
                  <img src={dish.image} alt={dish.title} className="w-24  h-24 rounded-full object-cover" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-md ${dish.tagColor}`}>{dish.tag}</span>
                <h3 className="font-semibold sm:text-lg text-[14px] max-sm:mt-2.5">{dish.title}</h3>
                <div className="text-sm text-gray-500 flex items-center gap-3">
                  <span>{dish.time}</span>
                  <span className="text-purple-600 flex gap-2 items-center"><Star className={'size-4'}/> {dish.rating}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-lg">{dish.price}</span>
                  <button
                  onClick={() => addCart(dish.id, addCartData, setAddCartData)}
                  className="w-8 h-8 animate-pulse hover:shadow-2xl rounded-full bg-gray-800 text-white text-lg">+</button>
                </div>
                <div className="absolute top-4 right-4 text-gray-400"><Heart className={'size-4 stroke-red-500'}/></div>
              </div>
              </SwiperSlide>
            ))}
            
            </Swiper>
        
      </div>
            <div className="w-full h-0.5 bg-zinc-200 rounded-2xl "></div>
      {/* Control Purchases*/}
      
      <div className="sm:bg-[#dceaf3] sm:px-8 py-8  rounded-[35px] font-sans space-y-20">
      {/* Верхний блок */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Левая колонка - заказы */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Control <span className="text-[#6581ff]">Purchases</span><br />
            Via Dashboard
          </h2>

          <div className="mt-8 space-y-4">
            {ControlPurchases.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className={`${item.statusColor} text-sm`}>{item.status}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Правая колонка - purchases */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Purchases</h3>
            <select className="text-sm bg-gray-100 px-3 py-1 rounded-md">
              <option>This month</option>
            </select>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-50  border-1 border-[#e0e4e9]">
              <div className='flex justify-between w-full items-center'>
                <div className=''>
                  <h1 className='text-[#6581ff] font-semibold'>
                    <span className="text-xl">💼</span>
                  Expense
                  </h1>
                <p className="text-sm text-gray-500 mt-1">Increased By 10%</p>

                </div>
                <p className="text-xl font-semibold">$409.00</p>
              </div>
            <div className="w-full h-1 bg-blue-200 mt-2 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-[#6581ff]"></div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50  border-1 border-[#e0e4e9]">
              <div className='flex justify-between w-full items-center'>
                <div className=''>
                  <h1 className='text-[#6581ff] font-semibold'>
                    <span className="text-xl">💼</span>
                  Increased By 5%
                  </h1>
                <p className="text-sm text-gray-500 mt-1">Voucher Usage</p>

                </div>
                <p className="text-xl font-semibold">$45.78</p>
              </div>
            <div className="w-full h-1 bg-yellow-100 mt-2 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-[#FBAD18]"></div>
              </div>
            </div>
              

          </div>
        </div>
      </div>


      </div>
    {/* Отзывы */}
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-center">
        <span className="text-[#6581ff]">Customer</span> Say
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={[Pagination]}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        className="testimonial-swiper"
      >
        {/* Отзыв 1 - особый случай */}
        <SwiperSlide>
          <div className="bg-white rounded-2xl shadow-[6px_71px_36px_0px_#dceaf3] p-6 space-y-4 h-full">
            <div className="flex items-center gap-4">
              <img src={imgFood2} className="w-12 h-12 rounded-full" alt="Alexander R." />
              <div>
                <h4 className="font-semibold">Alexander R.</h4>
                <p className="text-sm text-gray-500">01 Year With Us</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-600">
              “Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort.”
            </p>
            <div className="text-yellow-400 text-lg">★★★★★</div>
          </div>
        </SwiperSlide>

        {/* Остальные отзывы */}
        {[2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <div className="bg-white rounded-2xl shadow-[6px_71px_36px_0px_#dceaf3] p-6 space-y-4 h-full">
              <div className="flex items-center gap-4">

                <div>
                  <h4 className="font-semibold">Customer {item}</h4>
                  <p className="text-sm text-gray-500">{item} Months With Us</p>
                </div>
              </div>
              <p className="text-sm italic text-gray-600">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum.”
              </p>
              <div className="text-yellow-400 flex">{[1,2,3,4,5].map((_,i) => (
                <Star className={'size-6 fill-yellow-400'} key={i}/>
              ))}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
        <div
        style={{background:`url(${ImgMoreBurger})`}} 
        className=" w-full rounded-3xl px-6 py-4 max-sm:rounded-xs min-h-16 max-sm:scale-110">
          
          <div className="flex justify-between md:items-center max-md:flex-col">
            <div>
              <h1 className='text-blue-400 md:text-6xl text-3xl font-semibold font-poppins'>Get 50%</h1>
         
            <div
              className="relative w-full bg-gray-100 rounded-2xl shadow-md md:p-1.5 p-1 transition-all duration-150 ease-in-out mt-4 hover:shadow-lg"
            >
              <input
                type="text"
                className="w-full pl-2 pr-28 max-md:pr-20 max-sm:pr-16 py-3 md:text-base text-[12px] text-gray-700 bg-transparent rounded-lg focus:outline-none"
                placeholder=" Enter Your Email Address..."
              />
              <button
                className="absolute max-md:text-xs right-1 top-1 bottom-1 md:px-6 px-4 bg-[#6581ff] text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]"
              >
                <span className='max-sm:hidden'>Search</span>
                <Search className={'sm:hidden size-6'}/>
              </button>
            </div>

            </div>
           <img src={imgFood} alt={imgFood} width={165} className='transform animate md:translate-y-22 translate-y-4'/>
          </div>
        </div>
      <div className="w-full h-0.5 bg-zinc-300 rounded-2xl mt-10"></div>
    </div>
  )
}

export default Home