import  { useEffect, useState } from 'react';
import ImgMoreBurger from '../../img/Mask Group.png';
import Search from '../../icons/search';
import imgFood from '../../Img/Food Image.png';
import { Link } from 'react-router-dom';
import LineIllustrationOne from '../../icons/LineIllustrationOne';
const articles = [
  {
    id:1,
    title: "How To Order Food ?",
    image: "https://static-cse.canva.com/blob/191106/00_verzosa_winterlandscapes_jakob-owens-tb-2640x1485.a3c848e1.avif",
    author: "Perperzon",
    date: "15 DEC, 2022",
  },
  {
    id:2,
    title: "How To Track The Order ?",
    image: "https://pravo.hse.ru/data/2016/05/15/1129039480/43TzuVkGkRg.jpg",
    author: "Perperzon",
    date: "15 DEC, 2022",
  },
  {
    id:3,
    title: "How To Manage Cards ?",
    image: "https://img.freepik.com/photos-premium/memoji-homme-heureux-fond-blanc-emoji_826801-6838.jpg?ga=GA1.1.18770923.1747292644&semt=ais_hybrid&w=740",
    author: "Perperzon",
    date: "15 DEC, 2022",
  },
  {
    id:4,
    title: "Tips & Tricks For Business",
    image: "https://rus.azattyq-ruhy.kz/cache/imagine/1200/uploads/news/2022/10/22/6353be304a9a2328707751.jpg.webp",
    author: "Perperzon",
    date: "15 DEC, 2022",
  },
  {
    id:5,
    title: "How To Control Money ?",
    image: "https://i.pinimg.com/736x/82/0d/5f/820d5f79056469316e0bbe76134e70db.jpg",
    author: "Perperzon",
    date: "15 DEC, 2022",
  },
  {
    id:6,
    title: "Top 5 Business Ideas",
    image: "https://i.pinimg.com/736x/31/52/6c/31526c8c19161b1b9900f08105b03808.jpg",
    author: "Perperzon",
    date: "15 DEC, 2022",
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
export default function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
   setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="container mx-auto">
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
      <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Latest <span className="text-[#728cff]">Articles</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.id} to={`items/${article.id}`}>
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-4">{article.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.pinimg.com/736x/a2/4c/2f/a24c2f333d02de0e164ab6d90a4bedec.jpg"
                    alt="Author"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[11px]">Written By</p>
                    <p className="text-black font-semibold">{article.author}</p>
                  </div>
                </div>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>

    </div>
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
  );
}
