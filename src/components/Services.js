'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const servicesContent = {
  text: {
    subTitle: 'スキル',
    Title: 'skills',
    description:
      '',
  },
  items: [
    {
      icon: '/assets/wordpress_logo.svg',
      title: 'WordPress',
      description: 'WordPressの既存テーマからオリジナルテーマまで柔軟に対応し、独自のサイトを制作',
    },
    {
      icon: '/assets/javascript_icon.svg',
      title: 'JavaScript',
      description: 'SwiperやGSAPなどのライブラリを駆使し、アニメーションを使った魅力的なサイトを制作',
    },
    {
      icon: '/assets/react_original_logo.svg',
      title: 'React',
      description: 'Reactでホームページ制作やアプリ開発を行い、モダンで直感的なユーザー体験を提供します。',
    },
    {
      icon: '/assets/google_script_apps_logo.svg',
      title: 'Google Apps Script（GAS）',
      description:
        'GmailやGoogleスプレッドシートを始めとしたGoogleサービスを自動化することが可能です。VBAも対応いたします。',
    },
    {
      icon: '/assets/raspberry_pi.svg',
      title: 'Raspberry Pi',
      description:
        'Raspberry Pi・Arduinoで、ホームオートメーションからIoTプロトタイプ開発まで、多様なニーズに応えるソリューションを提供します',
    },
    {
      icon: '/assets/figma_logo_icon_170157.svg',
      title: 'デザイン',
      description:
        'Figmaで洗練されたホームページデザイン、ロゴ、バナーを制作し、魅力的なビジュアルコンテンツでブランドの価値を高めます',
    },
  ],
};
 
function Services() {
 
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  });
 
  return (
    <section id="skills" className="py-20 bg-light ">
      <div className="container px-4 mx-auto">
        {/* 上の段 */}
        <div className="max-w-xl mx-auto text-center mb-20"
            data-aos="fade-up"
            data-aos-delay="100">
          <span className='inline-block py-1  text-heading font-semibold relative mb-2 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'>
            {servicesContent.text.subTitle}
          </span>
          <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>{servicesContent.text.Title}</h2>
          {/* <p className='text-body leading-relaxed'>{servicesContent.text.description}</p> */}
        </div>
        {/* 下の段 */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {servicesContent.items.map((item, index) => {
            index *= 100;
         
          return(
            <div key={index}
            className='flex space-x-10'
            data-aos="fade-up"
            data-aos-delay={index}
            >
              <div className='w-14 shrink-0'>
                <span className='inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl'>
                  <Image src={item.icon} width={60} height={60} alt="icon" />
                </span>
              </div>
              <div>
                <h3 className='text-heading font-bold mb-3'>{item.title}</h3>
                <p className='leading-relaxed text-body'>{item.description}</p>
              </div>
            </div>
          ) })}
        </div>
      </div>
    </section>
  );
}
 
export default Services