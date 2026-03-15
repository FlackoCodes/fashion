import Image from "next/image"
import {StaticImageData} from "next/image"
import handBag from "../../../../public/assets/handBag.jpg"
import watch from "../../../../public/assets/watch.jpg"
import fashionBg from "../../../../public/assets/fashionWeek.jpg"
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

function Main() {
    return (
        <main className="max-w-7xl mx-auto">
            <Trending />
            <Fashweek />
        </main>
    )
}
export default Main

function Trending() {
    return (
        <section className="max-w-7xl my-4 md:my-8">
            <header className="flex justify-between items-center">
                <h2 className="text-3xl text-[#000000] font-bold leading-[42px] font-fashion tracking-tight">Trending Now</h2>
                <p className="text-[#000000] leading-[42px] font-nav border-b-2  text-[14px] font-medium border-b-black tracking-tighter">View All</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
               {
                trendingData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="relative">
                            <Image src={item.image} alt={item.name} className="w-[320px] h-[331px] object-cover" />
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
        <section className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[68%_32%] gap-4 md:gap-8 my-6 md:my-12">
                <div className="bg-[#E5E7EB]" style={{backgroundImage: `url(${fashionBg.src})`, backgroundSize: "cover", backgroundPosition: "center", width: "791px", height:"331px", backgroundColor: "#E5E7EB"}}>
                    <h2 className="text-[#FFFFFF] w-auto md:w-[125px] font-fashion text-3xl md:text-5xl leading-8 tracking-wider p-12 text-center md:text-left">Fashion Week with Balenciaga</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-lg text-start w-full md:w-[417px] md:text-[24px] text-[#141413] font-normal font-lato leading-[120%] tracking-tighter">
                    Discover the latest runway looks and <br className="hidden md:block"/> exclusive pieces from Paris Fashion Week
                </p>
                <div className="w-full text-start"> 
                    <Link
                    href=""
                    className="text-white text-start bg-[#E31837] font-lato py-2 px-6"
                >
                    Explore Collection
                </Link></div>
               
                </div>
            </div>
        </section>
    )
}