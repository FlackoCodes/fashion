"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import socialsOne from "../../../../public/assets//socialsOne.png"
import socialsTwo from "../../../../public/assets//socialsTwo.png"
import socialsThree from "../../../../public/assets//socialsThree.png"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel"
import Image from "next/image"

function Socials() {
    return (
        <section className="max-w-7xl mx-auto">
            <header className="text-center">
                <h2 className="text-[36px] my-4 leading-8 tracking-tighter font-fashion font-bold">Follow @Luxora</h2>
                <p className="text-[#4B5563] font-nav text-[16px] leading-[24px] font-medium tracking-tighter">Join our community of style enthusiasts</p>
            </header>
            <SocialsSlider />
            <GetInTouch />
        </section>
    )
}

export default Socials



const brands = [
  { name: "Brand 1", image: socialsOne },
  { name: "Brand 2", image: socialsTwo },
  { name: "Brand 3", image: socialsThree },
  { name: "Brand 4", image: socialsOne },
  { name: "Brand 5", image: socialsTwo },
  { name: "Brand 7", image: socialsThree },
  { name: "Brand 8", image: socialsOne },
  { name: "Brand 9", image: socialsTwo },
  { name: "Brand 10", image: socialsThree },
]

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
      {brands.map((brand) => (
        <CarouselItem
          key={brand.name}
          className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
        >
          <div className="h-[190px] w-[200px] flex items-center justify-center">
            <Image
              src={brand.image}
              alt={brand.name}
              className="max-h-full object-contain"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</section>
  )
}

function GetInTouch(){
    return(
        <section className="bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto text-center py-16">
                <h2 className="text-xl md:text-[36px] text-[#000000] my-4 leading-8 tracking-tighter font-fashion font-bold mb-4">Join Our Exclusive Circle</h2>
                <p className="text-[#4B5563] font-nav text-[12px] md:text-[16px] leading-[24px] font-medium tracking-tighter">Be the first to know about new arrivals, special offers, and style inspiration</p>
                <form action="" className="my-6 flex flex-col md:flex-row gap-4 items-center justify-center p-4">
                    <input type="email" placeholder="Enter your email" className="rounded-full py-3 px-8  w-full md:w-auto block md:inline-block border mr-4 border-[#E5E7EB]"/>
                    <button type="submit" className="font-nav text-[#E5E7EB] bg-black rounded-full py-3 px-8 w-full md:w-auto block md:inline-block">Subscribe</button>
                </form>
                <p className="text-[#6B7280] font-nav text-[12px] md:text-[16px] leading-[24px] font-medium tracking-tighter">By subscribing, you agree to our Privacy Policy and consent to receive updates</p>
            </div>
        </section>
    )
}