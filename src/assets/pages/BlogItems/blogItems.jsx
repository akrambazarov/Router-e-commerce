import React from 'react'
//instalition
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate, useParams } from 'react-router-dom';
import Right from '../../icons/right';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
const articles = [
  {
    id:1,
    title: "How To Order Food ?",
    image: "https://static-cse.canva.com/blob/191106/00_verzosa_winterlandscapes_jakob-owens-tb-2640x1485.a3c848e1.avif",
    author: "Perperzon",
    date: "15 DEC, 2022",
    desc: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    itemDesc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    placeOrderDesc:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',

  },
  {
    id:2,
    title: "How To Track The Order ?",
    image: "https://pravo.hse.ru/data/2016/05/15/1129039480/43TzuVkGkRg.jpg",
    author: "Perperzon",
    date: "15 DEC, 2025",
    desc: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    itemDesc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    placeOrderDesc:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',

  },
  {
    id:3,
    title: "How To Manage Cards ?",
    image: "https://img.freepik.com/photos-premium/memoji-homme-heureux-fond-blanc-emoji_826801-6838.jpg?ga=GA1.1.18770923.1747292644&semt=ais_hybrid&w=740",
    author: "Perperzon",
    date: "15 DEC, 2025",
    desc: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    itemDesc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    placeOrderDesc:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',

  },
  {
    id:4,
    title: "Tips & Tricks For Business",
    image: "https://rus.azattyq-ruhy.kz/cache/imagine/1200/uploads/news/2022/10/22/6353be304a9a2328707751.jpg.webp",
    author: "Perperzon",
    date: "15 SEP, 2024",
    desc: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    itemDesc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    placeOrderDesc:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',

  },
  {
    id:5,
    title: "How To Control Money ?",
    image: "https://i.pinimg.com/736x/82/0d/5f/820d5f79056469316e0bbe76134e70db.jpg",
    author: "Perperzon",
    date: "31 DEC, 2024",
    desc: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    itemDesc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    placeOrderDesc:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',

  },
  {
    id:6,
    title: "Top 5 Business Ideas",
    image: "https://i.pinimg.com/736x/31/52/6c/31526c8c19161b1b9900f08105b03808.jpg",
    author: "Perperzon",
    date: "15 MARTH, 2025",
    desc: "Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance to find the perfect restaurant for your needs. Click on a restaurant to view its menu. Once you're logged in, you can browse through the list of available restaurants on the Eatly website. You can filter by cuisine, price, and distance.",
    itemDesc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
    placeOrderDesc:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',

  },
];
const BlogItems = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dataArticle = articles.find((e) => e.id === Number(id));
    

  return (
    <div className='container flex gap-5 mx-auto xl:flex-row flex-col'>

    <section className="max-w-4xl mx-auto py-12">
    <Link onClick={() => navigate(-1)}><div className='rotate-180 mb-5 mr-4' ><Right className={'size-6'}/></div></Link>
    <div className='w-full'>
        <h1 className="text-3xl font-bold mb-6">How To Order Food On Eatly?</h1>
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://i.pinimg.com/736x/a2/4c/2f/a24c2f333d02de0e164ab6d90a4bedec.jpg"
          alt="Author"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-xs text-gray-500">Written by</p>
          <p className="font-semibold">{dataArticle.author}</p>
        </div>
      </div>
      <img
        src={dataArticle.image}
        alt="Cover"
        className="rounded-xl mb-8 w-full h-72 object-cover"
      />

      <h2 className="text-xl font-bold mb-2">Browse Restaurants And Menus</h2>
      <p className="text-gray-600 mb-4">
        {dataArticle.desc}
      </p>

      <ul className="list-disc ml-6 mb-6 text-gray-600">
        <li>It was popularized in the 1960s</li>
        <li>Lorem Ipsum passages</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Select Your Items</h2>
      <p className="text-gray-600 mb-4">
        {dataArticle.itemDesc}
      </p>

      <h2 className="text-xl font-bold mb-2">Place Your Order</h2>
      <p className="text-gray-600">
        {dataArticle.placeOrderDesc}
      </p>
        </div>
        <Button text = {'Next Article'} className={'bg-[#728cff] text-white mt-4'}/>
    
    </section>
    <aside className="bg-[#e4eff5] p-6 rounded-2xl  shadow-md space-y-6">
      <h3 className="text-lg font-semibold mb-4">Top Articles</h3>
    <div className="xl:h-[1000px] w-full   mx-auto flex items-center">
      <Swiper
        direction={'vertical'}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        centeredSlides={false}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            direction: 'horizontal',
            centeredSlides: true,  
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1.5,  
            slidesPerGroup: 1,
            direction: 'horizontal',
            centeredSlides: true
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            direction: 'horizontal',
            centeredSlides: true
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            direction: 'horizontal',
            centeredSlides:true
          },
          1280:{
            slidesPerView:3,
            slidesPerGroup:3,
            direction:'vertical',
            centeredSlides:false,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          horizontalClass: 'swiper-pagination-horizontal',
          verticalClass: 'swiper-pagination-vertical'
        }}
        speed={500}
        resistanceRatio={0.5}
        className="h-full w-full"
      >
        {articles.map((article) => (
          <SwiperSlide 
            key={article.id} 
            className="!flex items-center justify-center !h-auto py-2"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-xs mx-auto">
              <Link key={article.id} to={`/Blog/items/${article.id}`}>
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              </Link>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <img
                      src={'https://i.pinimg.com/736x/a2/4c/2f/a24c2f333d02de0e164ab6d90a4bedec.jpg'}
                      alt="Author"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs">Written By</p>
                      <p className="text-black font-semibold">{article.author}</p>
                    </div>
                  </div>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </aside>
    </div>
  )
}

export default BlogItems