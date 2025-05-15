import React from 'react';
//instalition
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { data, Link, NavLink, useNavigate } from 'react-router-dom';
//Icons
import Check from '../../icons/check';
import Close from '../../icons/close';
import Star from '../../icons/star';
import Right from '../../icons/right';
//img
import imgFood from '../../Img/Food Image.png';
import imgFood2 from '../../Img/Food Image2.png';
import imgFood3 from '../../Img/Food Image3.png';

const Pricing = () => {
  const navigate = useNavigate();
  const features = [
    { name: 'Support 24/7', basic: true, premium: true },
    { name: 'Fast Delivery', basic: true, premium: true },
    { name: '20% Off Food Deals', basic: true, premium: true },
    { name: 'Transaction History', basic: true, premium: true },
    { name: 'Weekend Deals', basic: false, premium: true },
    { name: 'Dashboard Access', basic: false, premium: true },
    { name: 'Premium Group Access', basic: false, premium: true },
  ];
  const ControlPurchases = [
  { name: "Chicken Hell", status: "On The Way", time: "3:09 PM", statusColor: "text-green-500", image: imgFood },
  { name: "Swe Dish", status: "Delivered", time: "Yesterday", statusColor: "text-purple-600", image: imgFood2 },
  { name: "Fish Hell Veg", status: "Cancelled", time: "Yesterday", statusColor: "text-red-500", image: imgFood3 },
  ];
  return (
  <div className="container mx-auto">
    <Link onClick={() => navigate(-1)}><div className='rotate-180 mb-5 mr-4' ><Right className={'size-6'}/></div></Link>
      <div className="max-w-4xl mx-auto p-8 bg-[#e4eff5] rounded-3xl shadow-lg">
      {/* Заголовок */}
      
      <div className="grid grid-cols-3 border-b pb-6 mb-6">
        <div>
          <h2 className="md:text-2xl text-blue-500 text-sm font-bold">Pricing</h2>
          <p className="text-sm text-gray-500 max-md:hidden">Affordable Basic & Pro Plans</p>
        </div>
        <div className="text-center">
          <h3 className="md:text-2xl text-sm text-blue-500 font-bold">Basic</h3>
          <p className="text-sm text-gray-500 max-md:hidden">Completely 100% Free Plan</p>
        </div>
        <div className="text-center">
          <h3 className="md:text-2xl text-sm text-blue-500 font-bold">Premium</h3>
          <p className="text-sm text-gray-500 max-md:hidden">Amazing Premium Features Plan</p>
        </div>
      </div>

      {/* Цены */}
      <div className="grid grid-cols-3 items-center border-b pb-6 mb-6">
        <div></div>
        <div className="text-center">
          <span className="md:text-4xl text-xl text-gray-800 font-bold">$0</span>
          <span className=" text-[#728cff] text-sm">/month</span>
        </div>
        <div className="text-center">
          <span className="md:text-4xl text-xl text-gray-800 font-bold">$5</span>
          <span className=" text-[#728cff] text-sm">/month</span>
        </div>
      </div>

      {/* Core Features */}
      <h4 className="text-sm font-bold mb-4 text-gray-700">Core features</h4>
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-3 items-center justify-between text-sm text-gray-700">
            <div className='text-[12px] font-semibold md:text-xl'>{feature.name}</div>
            <div className="flex justify-end ">
              {feature.basic ? (
                <span className="text-[#728cff] text-xl"><Check className={'size-6 '}/></span>
              ) : (
                <span className="text-[#ff6055] text-xl"><Close className={'size-6'}/></span>
              )}
            </div>
            <div className="flex justify-end">
              {feature.premium ? (
                <span className="text-[#728cff] text-xl"><Check className={'size-6 '}/></span>
              ) : (
                <span className="text-[#ff6055] text-xl"><Close className={'size-6'}/></span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <div className="grid grid-cols-3 max-md:flex max-md:justify-between pt-4 border-t">
        <div></div>
        <div className="text-center">
          <button className="bg-[#728cff] text-white max-md:py-3 px-6 py-2 rounded-lg text-sm font-semibold">
            START FREE
          </button>
        </div>
        <div className="text-center">
          <button className="bg-[#728cff] text-white max-md:py-3 px-6 py-2 rounded-lg text-sm font-semibold">
            START PRO
          </button>
        </div>
      </div>
      {/* Control Purchases*/}
    </div>
      <div className="sm:bg-[#dceaf3] sm:px-8 py-8 mt-10 rounded-[35px] font-sans space-y-20">
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
    </div>

  );
};

export default Pricing;
