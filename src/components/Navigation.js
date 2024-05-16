'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { BiChevronRight } from 'react-icons/bi';
import { gsap } from 'gsap';

const navigationMenu = [
  {
    href: '/works',
    label: 'Works',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  const navRefs = useRef([]);
  navRefs.current = [];

  const addToRefs = (el) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  useEffect(() => {
    // ホバーアニメーション設定
    navRefs.current.forEach((link) => {
      const before = link.querySelector('.before');
      const after = link.querySelector('.after');

      gsap.set(after, { y: '100%', position: 'absolute', opacity: 0 });

      link.addEventListener('mouseenter', () => {
        gsap.to(before, {
          y: '-100%',
          opacity: 0,
          duration: 0.6,
          color: '#4CAF50', // 変更する色
          ease: 'power2.out',
        });
        gsap.to(after, {
          y: '0%',
          opacity: 1,
          duration: 0.6,
          color: '#4CAF50', // 変更する色
          ease: 'power2.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(before, {
          y: '0%',
          opacity: 1,
          duration: 1,
          color: '#000000', // 元の色
          ease: 'power2.out',
        });
        gsap.to(after, {
          y: '100%',
          opacity: 0,
          duration: 0.6,
          color: '#000000', // 元の色
          ease: 'power2.out',
        });
      });
    });
  }, []);

  const [mobile, setMobile] = useState({});
  useEffect(() => {
    function handleResize() {
      setMobile({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (mobile.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      {/* ウェブメニュー */}
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            {/* ロゴ */}
            <div>
              <Link href={'/'}>
                <Image
                  src={'/assets/logo.png'}
                  width={90}
                  height={60}
                  alt="ロゴ"
                />
              </Link>
            </div>
            {/* メニュー */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li
                    key={index}
                    className="relative text-body overflow-hidden"
                    ref={addToRefs}
                  >
                    <Link href={item.href}>
                      <span className="before">{item.label}</span>
                      <span className="after absolute left-0">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ボタン */}
            <div className="block lg:hidden">
              {/* モバイル用 */}
              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiOutlineBars3 className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div className={navOpen ? 'py-0 block w-screen z-[999]' : 'hidden'}>
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        >
          <div className="h-screen bg-white w-[380px] top-0 right-0 z-[999] fixed">
            <div className="h-14 px-10 border-b flex items-center">
              <button
                className="flex items-center space-x-3"
                onClick={mobileMenuHandler}
              >
                <IoClose />
                <span>閉じる</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20">
              <ul className="block mb-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-green"
                      onClick={() => setNavOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="relative left-2 duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <BiChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
