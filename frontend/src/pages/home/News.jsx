import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// import news1 from "../../assets/news/news-1.png"
// import news2 from "../../assets/news/news-2.png"
// import news3 from "../../assets/news/news-3.png"
// import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
  {
      "id": 1,
      "title": "Global Music Festival Draws Record Crowds",
      "description": "Music lovers from around the world gathered for the Global Music Festival, featuring performances from top artists and celebrating diverse musical cultures.",
      "image": music1
  },
  {
      "id": 2,
      "title": "Breakthrough in Music AI Composition",
      "description": "A groundbreaking AI tool is changing the way music is composed, offering artists innovative ways to create melodies and harmonies like never before.",
      "image": music2
  },
  {
      "id": 3,
      "title": "Iconic Band Announces Reunion Tour",
      "description": "Fans are ecstatic as an iconic band reveals plans for a highly anticipated reunion tour, performing their greatest hits across the globe.",
      "image": music3
  },
  {
      "id": 4,
      "title": "Streaming Services See Surge in Vinyl Resurgence",
      "description": "The unexpected comeback of vinyl records is influencing streaming services to offer exclusive album releases for collectors and audiophiles.",
      "image": music4
  },
  {
      "id": 5,
      "title": "Award-Winning Artist Releases New Album",
      "description": "An award-winning artist has dropped their highly awaited album, blending unique sounds and genres to create a masterpiece for fans.",
      "image": music5
  }
]


const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>News </h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt=""  className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </div>
  )
}

export default News