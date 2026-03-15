"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel"

import { CA } from 'country-flag-icons/react/3x2'
import {CiUser, CiHeart, CiShoppingCart, CiSearch} from 'react-icons/ci'
import Link from "next/link"
import Image from "next/image"
import promoSaleImage from "../../../../public/assets/blackSale.jpg"

const navLinks = [
        {name: "Sale Up to 70%", href: "/women", promo: true},
        {name: "New Arrivals", href: "/men", promo: false},
        {name: "Designer Brands", href: "/kids", promo: false},
        {name: "Clothing", href: "/beauty", promo: false},
        {name: "Shoes", href: "/beauty", promo: false},
        {name: "Bags", href: "/beauty", promo: false},
        {name: "Jewellery", href: "/beauty", promo: false},
        {name: "Watches", href: "/beauty", promo: false},
        {name: "Accessories", href: "/beauty", promo: false},
    ]
function NavBar() {

    return(
        <header className="w-full max-w-7xl mx-auto p-1.5">
            <nav className="flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <div>
                        <ul className="flex items-center gap-12 font-nav">
                            <li>Women</li>
                            <li>Men</li>
                            <li>Kids</li>
                            <li>Beauty</li>
                        </ul>
                    </div>
                    <div>
                      <h1 className="font-fashion tracking-[2.5px] font-bold leading-[36px] text-[30px]">FASHION</h1>
                    </div>
                    <div>
                      <ul className="flex items-center gap-6 font-nav">
                           <CA className='size-6 rounded-full' />
                           <div className="flex items-center gap-2">
                             <CiUser className='size-5' />
                            <p>Sign In</p>
                           </div>
                           <div className="flex items-center gap-2">
                             <CiHeart className='size-5' />
                           </div>
                            <CiShoppingCart className='size-5' />
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-200 mt-8 py-6 flex justify-between items-center'>
                    <ul className="flex items-center gap-12">
                        {navLinks.map((link, index) => (
                            <li className={`text-sm tracking-tighter font-inter leading-[17px] font-nav font-medium ${link.promo ? 'text-[#DC2626]' : 'text-[#374151]'}`} key={index}>{link.name}</li>
                        ))}
                    </ul>
                    <div className='relative'>
                        <input
                         type="text" 
                         name="search"
                         id="search" 
                         className='rounded-full py-2 px-4 border border-[#E5E7EB] text- placeholder:text-[#00000080]' 
                         placeholder='Search luxury fashion'/>
                         <CiSearch className='size-5 absolute bottom-[25%] right-2' />
                    </div>
                </div>
            </nav>
            <PromoSales />
        </header>
    )
}

export default NavBar

function PromoSales (){
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-5 md:gap-9">
  
  <div className="bg-[#F1F1F1] text-center font-fashion flex flex-col justify-center py-6 px-6 md:px-10 lg:px-[154px] min-h-[155px] md:min-h-[220px]">
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl leading-[120%] tracking-[1px]">
        Spring/Summer 2024
      </h2>

      <p className="text-[12px] md:text-[14px] lg:text-[16px] font-light leading-[100%] tracking-tight font-news py-1.5">
        Discover the season&apos;s most coveted collections
      </p>

      <Link
        href="/"
        className="font-news text-base md:text-lg lg:text-xl underline font-medium"
      >
        Shop New Arrivals
      </Link>
    </div>
  </div>

  <div className="h-full">
    <Image
      className="w-full h-full object-cover min-h-[155px] md:min-h-[220px]"
      src={promoSaleImage}
      alt="black friday banner"
    />
  </div>

</div>
    )
}

function NavSlider(){
  return (
    
function SocialsSlider() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  ).current

  return (
  <section className="w-full max-w-7xl mx-auto bg-white px-6 md:px-10 py-16">
  <Carousel
    plugins={[autoplay]}
    opts={{ align: "start", loop: true }}
    className="w-full"
  >
    <CarouselContent className="-ml-4">
      {navLinks.map((navLinkItem, index) => (
        <CarouselItem
          key={index}
          className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
        >
          <div className="h-[190px] w-[200px] flex items-center justify-center">
           <span className="text-sm tracking-tighter font-inter leading-[17px] font-nav font-medium">{navLinkItem.name}</span>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</section>
  )
}
  )
}