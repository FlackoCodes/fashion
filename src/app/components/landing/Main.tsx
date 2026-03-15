import Image from "next/image"
import {StaticImageData} from "next/image"
import handBag from "../../../../public/assets/handBag.jpg"
import watch from "../../../../public/assets/watch.jpg"
import { Heart } from "lucide-react"


type trendingData = {
    image: StaticImageData;
    name: string;
    description: string;
    price: number;
    discoubtedPrice?: number;            
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
        discoubtedPrice:  3500
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
                                {item.discoubtedPrice && (
                                    <span className="absolute font-nav text-[12px] font-medium text-[18px] py-2  leading-[16.7px] tracking-tighter text-white top-1 left-1 text-lg">Sale</span>)
                                }
                            </div>
                        </div>
                        <h3 className="leading-[16px] tracking-tight font-nav font-normal">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-lg font-bold">${item.price}</p>
                            {
                                item.discoubtedPrice && (
                                    <p className="line-through text-lg font-bold">${item.discoubtedPrice}</p>
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
