import Link from "next/link"
import heroImageOne from "../../../../public/assets/bag1.png"
import heroImageTwo from "../../../../public/assets/statementshoes.png"
import Image from "next/image"

function Hero() {
    return (
        <>
      <section
  className="w-full bg-gray-900 bg-linear-to-r from-gray-900 to-gray-500"
//   style={{ backgroundImage: `url(${heroImage.src})` }}
>
  <div className="max-w-7xl mx-auto px-6 py-20 my-10">
    <h2 className="text-sm leading-5 tracking-[.9px] font-nav font-bold text-white">EXCLUSIVE COLLECTION</h2>
    <p className="text-white font-fashion w-full md:w-[361px] text-2xl md:text-5xl py-2">Valentino Haute Couture</p>
    <p className="text-white font-nav font-light text-sm md:text-lg py-2">Experience the epitome of Italian craftsmanship</p>
    <Link href="/" className="inline-block font-nav bg-white my-2 text-[#1A1A1A] py-2 px-4">
      Explore Collection
    </Link>
  </div>
</section>
<DesignerSales />
</>
)
}

export default Hero


function DesignerSales (){
    return (
        <section className="max-w-7xl mx-auto p-4 md:p-0">
        <div className="my-4 md:flex grid justify-between">
        <div className="flex flex-col gap-2 items-start mb-4  md:border-b-2 border-b-olive-950">
            <Image alt="hero-shoes" src={heroImageOne} className="w-[412px]"/>
            <h3 className="text-[#000000] font-semibold font-fashion text-sm md:text-2xl leading-[120%]">Designer Bags</h3>
            <p className="font-nav text-[#4B5563] text-xs">Iconic styles from Hermès, Chanel & more</p>
            <Link href={"/"} className="font-nav text-[#000000] text-base">Shop Now</Link>
        </div>
        <div className="flex flex-col gap-2 items-start mb-4 md:border-b-2 border-b-olive-950">
            <Image alt="hero-shoes" src={heroImageTwo} className="w-[412px]"/>
            <h3 className="text-[#000000] font-semibold font-fashion text-sm md:text-2xl leading-[120%]">Statement Shoes</h3>
            <p className="font-nav text-[#4B5563] text-xs">Iconic styles from Hermès, Chanel & more</p>
            <Link href={"/"} className="font-nav text-[#000000] text-base">Shop Now</Link>
        </div>
        <div className="flex flex-col gap-2 items-start mb-4  md:border-b-2 border-b-olive-950">
            <Image alt="hero-shoes" src={heroImageOne} className="w-[412px]"/>
            <h3 className="text-[#000000] font-semibold font-fashion text-sm md:text-2xl leading-[120%]">Designer Bags</h3>
            <p className="font-nav text-[#4B5563] text-xs">Iconic styles from Hermès, Chanel & more</p>
            <Link href={"/"} className="font-nav text-[#000000] text-base">Shop Now</Link>
        </div>
    </div>
    </section>
    )
}