import React from 'react'
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

export const toggleFavorite = (id, cartData, setCartData) => {
    const checkDish = dishes.find((e) => e.id === id);
  if (!checkDish) return "Not a Food";
  setFavorites(prev => {
    const result = prev.find((e) => e.id === id);
    let updated;
    if (result) {
      return prev.filter(item => 
        item.id !== id 
          ?updated =  {...item} : updated = [...prev, checkDish]
      );
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    return updated;
  });
};
export default featuredProduct