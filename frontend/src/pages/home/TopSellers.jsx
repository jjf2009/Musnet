import React, { useEffect, useState } from 'react'
import BookCard from '../Musics/SongCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllMusicsQuery } from '../../redux/features/musics/muiscsApi';

const categories = ["Choose a genre", "Pop", "Hip-hop", "Horror", "Adventure"]

const TopSongs = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

   const {data: musics = []} = useFetchAllMusicsQuery();
  
    const filteredMusics = selectedCategory === "Choose a genre" ? musics : musics.filter(music => music.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Songs</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

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
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredBooks.length > 0 && filteredBooks.map((music, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={music} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>


        </div>
    )
}

export default TopSellers