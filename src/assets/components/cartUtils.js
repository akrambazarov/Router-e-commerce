import React from 'react'
//img
import imgFood from '../Img/Food Image.png';
import imgFood2 from '../Img/Food Image2.png';
import imgFood3 from '../Img/Food Image3.png';

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
export const addCart = (id, cartData, setCartData) => {
  const checkDish = dishes.find((e) => e.id === id);
  if (!checkDish) return "Not a Food";
  
  setCartData(prev => {
    const result = prev.find((e) => e.id === id);
    if (result) {
      return prev.map(item => 
        item.id === id 
          ? { ...item, quantity: (Number(item.quantity) + 1).toString() } 
          : item
      );
    }
    return [...prev, { ...checkDish, quantity: "1" }];
  });
};

export default addCart