import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
 
const footerContent = {
  text: {
    logo: '/assets/logo.png',
    description:
      '私のポートフォリオをご覧いただき、ありがとうございます。ご興味を持っていただけた方は、何でもお気軽にお問い合わせください最適なデザインソリューションを提供することを心掛けています。一緒に何か素晴らしいものを創り上げましょう。お問い合わせを心よりお待ちしております。',
  },
  footerLinks: [
    {
      heading: '概要',
      links: [
        {
          href: '#',
          label: 'Home',
        },
        {
          href: '/#skills',
          label: 'Skills',
        },
        {
          href: '/works',
          label: 'Works',
        },
        {
          href: '/blog',
          label: 'Blog',
        },
      ],
    },
    {
      heading: 'その他',
      links: [

        {
          href: '#',
          label: 'サポート',
        },
        {
          href: '#',
          label: 'サイトマップ',
        },
        {
          href: '#',
          label: 'プライバシーポリシー',
        },
      ],
    },
  ],

};
 
function Footer() {
  return (
    <footer className=" bg-white max-md:p-5 ">
      <div className="container px-4 mx-auto  border-t border-gray-200 pt-10">
        <div className="block lg:flex gap-20  pb-10 text-body justify-between">
          {/* 左 */}
          <div className="w-full lg:w-6/12 mb-10 lg:mb-0 border-r pr-12 border-gray-200">
            <Link href={'#'}>
              <Image
                src={footerContent.text.logo}
                width={90}
                height={60}
                alt="logo"
                className="mb-5"
              />
            </Link>
            <p className="leading-relaxed mb-7">
              {footerContent.text.description}
            </p>
            <Link
              href={'/contact'}
              className="flex space-x-2 outline-none items-center font-semibold text-green group justify-end duration-300 transition-all ease-in-out py-3 px-6 border rounded-full w-fit  hover:border-gray-400"
            >
              <span className='pr-2'>Contact</span>
              <span className="w-6 h-6 rounded-full bg-green text-white inline-flex items-center justify-center group-hover:bg-[#006e54] duration-300 transition-all ease-in-out">
                <BiChevronRight className="text-xl" />
              </span>
            </Link>
          </div>
 
          {/* 中央 */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 ">
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-heading mb-5">
                    {footerLink.heading}
                  </h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, index) => (
                      <li key={index} className="mb-3">
                        <Link
                          href={link.href}
                          className="flex items-center duration-300 transition-all ease-in-out hover:text-green group"
                        >
                          <span className='max-md:text-xs'>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
 
          {/* 右 */}
          {/* <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <h3 className="font-semibold text-heading mb-5">
              {footerContent.contact.heading}
            </h3>
            <p className="leading-relaxed mb-7">
              {footerContent.contact.description}
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <FaLocationDot className="text-xl text-green" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <FaPhoneAlt className="text-xl text-green" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <IoIosLink className="text-xl text-green" />
                <span>{footerContent.contact.address.website}</span>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="text-center py-2 border-t border-gray-200">
          Copyright Hirasawa 2023
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;