import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Location from '../../icons/location';
import Time from '../../icons/time';
import Button from '../../components/button';
import LineIllustrationOne from '../../icons/LineIllustrationOne';
import LineIllustrationTwo from '../../icons/LineIllustrationTwo';
import LineArrowTwo from '../../icons/LineArrowTwo';

const Cart = () => {
  const [cartData, setCartData] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState(0);
  const [deliveryFee] = useState(3.59);

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 38.5598,
    lng: 68.7870
  };

  // Обновляем localStorage и пересчитываем сумму при изменении корзины
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartData));
    const newTotal = cartData.reduce((sum, item) => {
      const price = Number(item.price.replace('$', ''));
      return sum + price * item.quantity;

    }, 0);
    setTotal(newTotal);
  }, [cartData]);

  // Увеличение количества товара
  const incrementItem = (id) => {
    setCartData(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  // Уменьшение количества товара
  const decrementItem = (id) => {
    setCartData(prev => 
      prev.map(item => {
        if (item.id === id) {
          if (item.quantity <= 1) {
            return null;
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(Boolean)
    );
  };

  // Удаление товара из корзины
  const removeItem = (id) => {
    setCartData(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className='container mx-auto'>
      <div className="relative w-full max-h-[500px] bg-gray-100 rounded-3xl">
        <LoadScript googleMapsApiKey="AIzaSyBqQcGAT9o0J6GR2vFiFRWK3__FNlYCCSw">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        {/* Инфоблок о доставке */}
        <div className="relative flex justify-center items-center">
          <div className="absolute translate-y-5 z-10 bg-white shadow-xl rounded-2xl w-[320px]">
            <div className="flex-1">
              <div className='bg-[#323142] rounded-tl-[16px] flex gap-4 items-center rounded-tr-2xl p-2'>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3kV9gs8ln7-5jqqjmUdjWmpzUvHbDKzj2w&s" 
                  alt="Rider" 
                  className="w-12 h-12 rounded-2xl object-cover" 
                />
                <div>
                  <h3 className="text-md font-semibold text-white">David Smith</h3>
                  <p className="text-sm text-white">Food Rider</p>
                </div>
              </div>
              <div className="mt-3 p-5 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-inherit"><Location/></span>
                  <p className="text-blue-600 leading-tight">
                    Horizental Road Stree 1178, California, USA
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-inherit"><Time/></span>
                  <p className="text-gray-600">15 Minutes</p>
                </div>
                <Button text={'Pendding'} className={'bg-[#728cff] mt-5 text-white'}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Список товаров */}
      <div className="w-full relative max-w-md p-6 max-sm:px-1 py-15 my-60 rounded-3xl shadow-2xs bg-[#e4eff5] mx-auto space-y-6">
        <LineIllustrationOne className={'absolute right-0 rotate-180 -translate-y-24 translate-x-8 max-sm:left-0 max-sm:-translate-y-20 max-sm:rotate-90 max-sm:-translate-x-5 max-sm:size-6'} />
        
        <div className="space-y-4">
          {cartData.map((item) => {
            const price = Number(item.price.replace('$', ''));
            const itemTotal = price * item.quantity;

            return (
              <div key={item.id} className="flex bg-white py-2 pr-4 pl-2 items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.tag} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold max-sm:text-[14px]">{item.title}</h4>
                    <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
                  </div>
                </div>
                <div className=''>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="text-lg border-[#323142] border-1 w-6 h-6 rounded-[5px] bg-white flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold w-6 text-center max-sm:text-[14px]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="text-lg bg-[#323142] w-6 h-6 rounded-[5px] text-white flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold w-14 translate-y-2.5 max-sm:text-[14px] text-right">
                    ${itemTotal.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Купон */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Apply Coupon"
            className="flex-1 px-4 py-2 border rounded-lg text-sm text-gray-500"
          />
          <button className="bg-[#728cff] text-white px-4 py-2 rounded-lg text-sm">
            Apply
          </button>
        </div>

        {/* Сумма */}
        <div className="text-sm space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-blue-500 text-base">
            <span>Total</span>
            <span>${(total + deliveryFee).toFixed(2)}</span>
          </div>
        </div>

        {/* Кнопка оплаты */}
        <button className="w-full bg-[#728cff] text-white text-sm font-semibold py-3 rounded-xl">
          Review Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;