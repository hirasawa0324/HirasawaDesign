'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const testimonialsContent = {
  text: {
    subTitle: '2023年度 合格者の声',
    title: '難関大へ2023合格者の声',
    description: 'Docゼミから志望大学に合格した方の声がたくさん届いています！',
  },
  testimonials: [
    {
      img: '/assets/person1.png',
      name: '匿名希望さん',
      titleRole: 'スペシャルコースを利用',
      testimony:
        '通信教育をもともとやっていたこともあり、教室にも通い始めました。高校2年生からはじめて塾に通い始めたので最初は不安もありましたが、教室は温かい雰囲気で、変に馴れ合うようなこともなく良かったです。講師の先生方は気さくに質問に応じて下さり、とても感謝しています。',
    },
    {
      img: '/assets/person2.png',
      name: '小林さん',
      titleRole: '夏期講習を利用',
      testimony:
        '私が合格できたのは、明らかにゼミのおかげです。 教室はアットホームで、自分の行きたい方向に正しい努力をさせてくれました。特に教室長の方は一人ひとりの特性を見て指導してくださり、講師の先生方も、私たち生徒を見守り時には厳しく指導してくださいました。',
    },
    {
      img: '/assets/person3.png',
      name: 'STさん',
      titleRole: '冬季講習を利用',
      testimony:
        '個別指導教室では、東大の実際の過去問を演習形式で行うことができたので、本番と同じレベルの問題を添削付きで何回も練習することができとても良かったです。また、教室では、Z会の共通テスト教材を貸し出ししてもらえるので、ぜひ活用してください。',
    },
  ],
};
 
function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  });
  return (
    <section id="testimonials" className="py-20 bg-light ">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          {/* 右 */}
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            <span
              className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {testimonialsContent.text.subTitle}
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {testimonialsContent.text.title}
            </h2>
            <p className="text-body leading-relaxed mb-10"
             data-aos="fade-up"
             data-aos-delay="300">
              {testimonialsContent.text.description}
            </p>
            <div
               data-aos="fade-up"
               data-aos-delay="400">
              <Link href={''} className="btnGreen">
                資料ダウンロード
              </Link>
            </div>
          </div>
 
          {/* 左 */}
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              {/* ２番目だけ弾く */}
              <div className="md:w-6/12 mb-6 md:mb-0"
               data-aos="fade-up"
               data-aos-delay="100">
                {testimonialsContent.testimonials.map((item, index) => {
                  if (index == 1) return null;
                  return (
                    <div
                      key={index}
                      className={`bg-white p-7 rounded-lg w-full ${
                        index == 1 ? '' : 'mb-6'
                      }`}
                    >
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={item.img}
                            width={579}
                            height={720}
                            alt="img1"
                            className="object-cover h-14 w-14 rounded-full"
                          />
                          <span className="absolute bottom-0 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center">
                            <FaQuoteLeft className="text-sm text-white" />
                          </span>
                        </div>
 
                        <div className="leading-3">
                          <strong className="block text-heading text-lg">
                            {item.name}
                          </strong>
                          <span className="text-sm">{item.titleRole}</span>
                        </div>
                      </div>
                      <div>
                        <blockquote className="text-body">
                          『{item.testimony}』
                        </blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
 
              <div className="md:w-6/12">
                <div>
                  <div className="w-16 h-16 hidden md:block bg-yellowLight rounded-full mb-6" />
                  <div className="bg-white p-7 rounded-lg w-full mb-6"
                   data-aos="fade-up"
                   data-aos-delay="400"
                  >
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={testimonialsContent.testimonials[1].img}
                          width={579}
                          height={720}
                          alt="img2"
                          className="object-cover w-14 h-14 rounded-full"
                        />
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-green rounded-full flex items-center justify-center">
                          <FaQuoteLeft className="text-sm text-white" />
                        </span>
                      </div>
                      <div className="leading-3">
                        <strong className="block text-heading text-lg">
                          {testimonialsContent.testimonials[1].name}
                        </strong>
                        <span className="text-sm">
                          {testimonialsContent.testimonials[1].titleRole}
                        </span>
                      </div>
                    </div>
                    <blockquote className="text-body">
                      『{testimonialsContent.testimonials[1].testimony}』
                    </blockquote>
                  </div>
                </div>
                <div className="bg-redLight hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Testimonials;
 