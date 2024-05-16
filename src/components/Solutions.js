'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

const solutionsContent = {
  text: {
    subTitle: 'ワークス',
    Title: 'Works',
    description:
      'これまでに手掛けたプロジェクトの一部を展示しています。各プロジェクトは、クライアントと綿密にコミュニケーションを取りながら進めており、それぞれのビジョンやニーズに合わせたカスタマイズを心がけています。良いデザインは優れたコミュニケーションから生まれると信じており、お客様との対話を大切にしながら、それぞれの目的に最適なソリューションを提供することを目指しています。各作品を通じて、私の技術と創造力の幅を感じていただければ幸いです。',
  },
  images: [
    '/assets/solution-img-1.png',
    '/assets/solution-img-2.png',
    '/assets/solution-img-3.png',
  ],
};

function Solutions() {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % solutionsContent.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextImage = (currentImage + 1) % solutionsContent.images.length;

    gsap.fromTo(
      imageRefs.current[nextImage],
      { x: '100%' },
      { x: '0%', duration: 2, ease: 'Expo.easeInOut' }
    );
    gsap.fromTo(
      imageRefs.current[currentImage],
      { x: '0%' },
      { x: '-100%', duration: 2, ease: 'Expo.easeInOut' }
    );
  }, [currentImage]);

  return (
    <section id="solutions" className="py-32 bg-light max-md:py-5 overflow-hidden h-full">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-12 justify-between max-md:flex max-md:flex-col">
          {/* 左側 */}
          <div className="w-1/2 lg:w-1/2 py-16 max-md:w-full relative">
            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '61.8%' }}>
              {solutionsContent.images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 img-container`}
                  style={{ zIndex: currentImage === index ? 1 : 0 }}
                  ref={(el) => (imageRefs.current[index] = el)}
                >
                  <Image
                    src={img}
                    fill
                    alt={`img${index + 1}`}
                    style={{ objectFit: 'cover' }}
                    className="shadow-lg "
                  />
                </div>
              ))}
            </div>
          </div>
          {/* 右側 */}
          <div className="lg:w-1/2 relative z-10 max-md:order-first flex flex-col justify-center">
            <span
              className='inline-block py-1 text-heading font-semibold relative mb-2 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10'
            >
              {solutionsContent.text.subTitle}
            </span>
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
              {solutionsContent.text.Title}
            </h2>
            <p className="text-body leading-relaxed mb-10">
              {solutionsContent.text.description}
            </p>
            {/* ボタン */}
            <div className="flex space-x-3">
              {/* <Link href={'/works'} className="btnGreen ">
                もっと見る
              </Link> */}
              <Link
              href={'/works'}
              className="flex space-x-2 outline-none items-center font-semibold text-green group justify-end duration-300 transition-all ease-in-out py-3 px-6 border rounded-full w-fit  hover:border-gray-400"
            >
              <span className='pr-2'>もっと見る</span>
              <span className="w-6 h-6 rounded-full bg-green text-white inline-flex items-center justify-center group-hover:bg-[#006e54] duration-300 transition-all ease-in-out">
                <BiChevronRight className="text-xl" />
              </span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
