import Image from "next/image"
import {StaticImageData} from "next/image"
import handBag from "../../../../public/assets/handBag.jpg"
import watch from "../../../../public/assets/watch.jpg"
import fashionBg from "../../../../public/assets/fashionWeek.jpg"
import balenciaga from "../../../../public/assets/brand1.png"
import ralphLauren from "../../../../public/assets/brand2.png"
import dior from "../../../../public/assets/brand3.png"
import { Heart } from "lucide-react"
import Link from "next/link"


type trendingData = {
    image: StaticImageData;
    name: string;
    description: string;
    price: number;
    discountedPrice?: number;            
}

const trendingData: trendingData[] = [
    {
        image: handBag,
        name: "BOTTEGA VENETA",
        description: "Intrecciato Leather Tote",
        price: 3200,
    },
      {
        image: watch,
        name: "CELINE",
        description: "Triomphe Sunglasses",
        price: 450,
    },
   {
        image: handBag,
        name: "CARTIER",
        description: "Tank Must Watch",
        price: 2800,
        discountedPrice:  3500
    },
     {
        image: watch,
        name: "HERMÈS",
        description: "Reversible H Belt",
        price: 890,
    }
]

type brandsData = {
    idx: number,
    image: StaticImageData,
    description : string
}

const featuredBrands: brandsData[] = [
    {   
        idx: 1,
        image: balenciaga,
        description: "Shop Balenciaga"
    },
    {   
        idx: 2,
        image: ralphLauren,
        description: "Shop Polo Ralph Lauren"
    },
    {   
        idx: 3,
        image: dior,
        description: "Shop Dior"
    }
]


function Main() {
    return (
        <main className="">
            <Trending />
            <Fashweek />
            <Brands />
        </main>
    )
}
export default Main

function Trending() {
    return (
        <section className="max-w-7xl mx-auto my-4 md:my-8 px-4 md:px-8">
            <header className="flex justify-between items-center">
                <h2 className="text-3xl text-[#000000] font-bold leading-[42px] font-fashion tracking-tight">Trending Now</h2>
                <p className="text-[#000000] leading-[42px] font-nav border-b-2  text-[14px] font-medium border-b-black tracking-tighter">View All</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
               {
                trendingData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="relative w-full">
                            <Image src={item.image} alt={item.name} className="w-full h-[331px] object-cover" />
                            <div className="absolute top-1 right-1">
                                <Heart  className="w-10 h-10 p-2 text-[#E5E7EB] bg-white z-10 rounded-full"/>
                            </div>
                            <div>
                                {item.discountedPrice && (
                                    <span className="absolute font-nav font-medium text-[18px] py-2  leading-[16.7px] tracking-tighter text-white top-1 left-1 text-lg">Sale</span>)
                                }
                            </div>
                        </div>
                        <h3 className="leading-[16px] tracking-tight font-nav font-normal">{item.name}</h3>
                        <p className="text-[14px] leading-5 tracking-tighter font-medium font-nav">{item.description}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-lg  tracking-tighter leading-7 font-semibold font-nav text-[#000000]">${item.price}</p>
                            {
                                item.discountedPrice && (
                                    <p className="line-through text-[15px] text-[#9CA3AF] tracking-tighter leading-7 font-semibold font-nav">${item.discountedPrice}</p>
                                )
                            }
                        </div>
                    </div>
                ))
               }
            </div>
        </section>
    )
}


function Fashweek(){
    return (
        <section className="max-w-7xl mx-auto p-4 md:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-[68%_32%] gap-6 md:gap-8 my-6 md:my-12">
                <div className="bg-[#E5E7EB] w-full overflow-hidden h-[300px] md:h-[400px] lg:h-[360px] bg-cover bg-center" style={{ backgroundImage: `url(${fashionBg.src})` }}>
                    <div className="h-full w-full flex items-center p-8 md:p-12">
                        <h2 className="text-[#FFFFFF] md:max-w-[300px] font-bold font-fashion text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wider text-center md:text-left mx-auto md:mx-0">Fashion Week with Balenciaga</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-start p-4 lg:p-0">
                    <p className="text-lg md:text-2xl text-[#141413] font-normal font-lato leading-[120%] tracking-tighter max-w-[600px] lg:max-w-none">
                        Discover the latest runway looks and <br className="hidden lg:block"/> exclusive pieces from Paris Fashion Week
                    </p>
                    <div className="w-full flex justify-center lg:justify-start"> 
                        <Link
                            href=""
                            className="inline-block text-white bg-[#E31837] font-lato py-3 px-8 transition-colors hover:bg-black"
                        >
                            Explore Collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Brands() {
    return(
        <section className="bg-[#F9FAFB]">
        <div className=" max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 my-6 md:my-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
                {
                    featuredBrands.map((brand, index) => (
                        <div key={index} className="flex flex-col w-full max-w-[350px] bg-white pb-6 mx-auto">
                            <div className="w-full h-full  lg:h-[331px] p-4 mb-4">
                                <Image src={brand.image} alt={brand.description} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-center px-4">
                                <Link href="" className="inline-block text-white bg-black text-[12px] md:text-[14px] lg:text-[16px] font-bold md:font-semibold font-lato py-2 px-10 transition-color text-center w-full max-w-[280px]">
                                    {brand.description}
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
         </section>
    )
}