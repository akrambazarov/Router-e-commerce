
//instalition
import { Swiper, SwiperSlide } from 'swiper/react';
import { data, Link, NavLink } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//Icons
import AppleIcon from '../../icons/apple'
import GoogleIcon from '../../icons/google'
import LineArrow from '../../icons/LineArrow';
import LineIllustrationOne from '../../icons/LineIllustrationOne';
import LineIllustrationTwo from '../../icons/LineIllustrationTwo';
//img
import imgFood from '../../Img/Food Image.png';
import imgGraphik from '../../Img/Graph.png';
const signUpOb = [
    {
        id:1,
        hours:'3',
        minuts:'04',
        title: 'Sign Up To eatly ',
        desc: 'Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.',
    },
    {
        id:2,
        hours:'5',
        minuts:'12',
        title: 'Eatly is the food delivery ',
        desc: 'Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.',
    },
    {
        id:3,
        hours:'7',
        minuts:'19',
        title: 'Find Foods With Love ',
        desc: 'Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.',
    },

]
const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#e4eff5] container mx-auto rounded-2xl flex flex-col lg:flex-row items-center max-lg:gap-10">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sign Up To <span className="text-[#728cff]">eatly</span></h1>
          
          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 bg-white border border-white rounded-lg py-3 px-6 w-full hover:bg-gray-50 transition-colors">
              
              <GoogleIcon className={'size-5 fill-[#323142]'}/>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-white rounded-lg py-3 px-6 w-full hover:bg-gray-50 transition-colors">
              
              <AppleIcon className={'size-6 fill-[#323142]'}/>
            </button>
          </div>
          
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Sign Up Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-blue-500 mb-2">FULL NAME</label>
              <input 
                type="text" 
                className="w-full p-4 border-1 border-[#728cff] text-[#728cff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#728cff] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-500 mb-2">EMAIL</label>
              <input 
                type="email" 
                className="w-full p-4 border border-[#728cff] text-[#728cff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#728cff] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-blue-500 mb-2">PASSWORD</label>
              <input 
                type="password" 
                className="w-full p-4 border border-[#728cff] text-[#728cff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#728cff] focus:border-transparent"
                placeholder="Create a password"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#728cff] text-white py-4 rounded-xl font-bold hover:bg-[#5a75e0] transition-colors"
            >
              SIGN UP
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already Have An Account?{' '}
              <Link to="/LogIn" className="text-[#728cff] font-medium hover:underline" >Log in</Link>
              
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section - Banner */}
    <div className="w-1/2 max-md:w-full max-md:py-20 flex-col ">
    
    {/* изображение еды */}
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
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
        {signUpOb.map((e,i) => (
            <SwiperSlide key={e.id}>
            <div>
            <div className="h-64 md:h-96 rounded-lg relative flex items-center justify-center">
    
            
            <div className="bg-[#728cff] rounded-full scale-90 md:scale-100 relative md:w-full h-full max-w-[300px] max-h-[300px]">
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
                <div className="absolute w-12 rounded-[5px] h-12 bg-[#aac9dd] -right-10 -bottom-12"></div>
                <div className="absolute w-12 rounded-[5px] h-12 border-white border-8 -right-6 -bottom-8"></div>
                <div className='flex h-20 w-70 absolute transform translate-x-[60px] translate-y-[-340px] max-md:translate-y-[-280px] z-10 shadow justify-between p-2 overflow-hidden gap-3 rounded-2xl bg-white max-sm:translate-x-[-10px] max-sm:translate-y-[-300px]'>
                <div className="flex items-center gap-3 ">
                <img src={imgFood} alt={imgFood} width={75} />
                <div className="">
                    <h4>Chicken Hell</h4>
                    <span className='text-[10px] text-[#3e3e3e] '>On The Way</span>
                </div>
                </div>
                <span className='text-[#ACADB9] absolute right-2 bottom-2'>{e.hours}:{e.minuts} PM</span>
                </div>
            </div>
            
            </div>
            <div className="text-center mt-10 max-md:mt-20">
                <h1 className='lg:text-3xl font-semibold my-5 text-sm text-[#728cff]'>{e.title} </h1>
                <span className='text-gray-600 text-xs '>{e.desc}</span>
            </div>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
    </div>
  )
}

export default SignUp