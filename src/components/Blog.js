'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatDate } from '@/libs/utils';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getBlogs } from '../libs/client';
import { AiOutlineTags } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Blog = () => {
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data.contents);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const swiper = sliderRef.current.swiper;

    const updateSlideStatus = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    swiper.on('slideChange', updateSlideStatus);
    return () => {
      swiper.off('slideChange', updateSlideStatus);
    };
  }, [sliderRef]);

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  });

  return (
    <section id="blog" className="py-20 bg-light overflow-x-hidden max-md:py-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span
              className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              ブログ・ニュース
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              新着ニュース
            </h2>
            <p
              className="text-body leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              日々のブログや最新ニュースを投稿しています
            </p>
          </div>

          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3 max-md:hidden">
              <div
                className={`${
                  isBeginning
                    ? 'opacity-30 bg-gray-300 cursor-auto'
                    : 'opacity-100 hover:bg-green'
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
                onClick={prevHandler}
              >
                <FaChevronLeft
                  className={`${
                    isBeginning
                      ? 'group-hover:text-green'
                      : ' group-hover:text-white'
                  } text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white`}
                />
              </div>
              <div
                className={`${
                  isEnd
                    ? 'opacity-30 bg-gray-300 cursor-auto'
                    : 'opacity-100 hover:bg-green'
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
                onClick={nextHandler}
              >
                <FaChevronRight
                  className={`${
                    isEnd
                      ? 'group-hover:text-green'
                      : ' group-hover:text-white'
                  } text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white`}
                />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          ref={sliderRef}
          speed={700}
          className='z-50 py-32 relative flex items-stretch mb-24 !overflow-visible before:content-[" "] before:py-32 before:z-50 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={index} className="overflow-visible h-full">
              <Link href={`/blog/${item.id}`} className="block p-0 rounded-lg bg-white relative mt-10 m-3 shadow-lg h-[380px] flex flex-col justify-between transform transition-transform duration-500 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg mb-4 w-full h-[200px]">
                  <Image
                    src={item.eyecatch.url}
                    layout="fill"
                    alt="blogImg"
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-heading text-lg px-5 font-bold leading-7 mb-3 line-clamp-3">
                    {item.title}
                  </h2>
                </div>
                <div className="mt-auto px-5 pb-5">
                  <div className="flex items-center gap-5 mb-2">
                    <p className="text-sm bg-gray-100 rounded-sm w-fit px-3 py-1">{item.category.name}</p>
                    <div className="flex gap-1 items-center">
                      <AiOutlineTags />
                      <span className="text-sm">{item.tags.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineClockCircle />
                    <p className='text-sm'>{formatDate(item.createdAt)}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mx-auto flex-col items-center justify-center w-fit">
          <Link
            href={'/blog'}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            過去のニュースは
            <strong className="text-green px-1 font-semibold">こちら</strong>
            <span className="text-body">|</span>
            <span className="bg-green rounded-full w-8 h-8 flex items-center justify-center">
              <FaChevronRight className="text-white text-2xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
