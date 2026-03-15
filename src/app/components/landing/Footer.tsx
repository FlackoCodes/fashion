import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa"
import { CA } from 'country-flag-icons/react/3x2'

function Footer() {
    const footerLinks = [
        {header: "Fashion", sub: ["Your destination for authentic luxury fashion from the world's most prestigious designers."], Icon: CA, break: true},
        {header:"Shop", sub: ["New Arrivals", "Men", "Women", "Sale", "Gift Cards"], break:false},
        {header:"Customer Care", sub: ["Contact Us", "Shipping Info", "Returns", "Sales Guide", "FAQ"], break:false},
        {header:"About", sub:["Our Story", "Sustainability", "Careers", "Press", "Privacy Policy"], break:false},
        {header: "Follow Us", sub:[
        { name : "Instagram", Icon : FaInstagram},
        {name: "Facebook", Icon: FaFacebook},
        {name: "Twitter", Icon: FaTwitter},
        {name: "pinterest", Icon: FaPinterest}
        ], icons: true}
    ]

    return (
        <footer className="bg-[#1A1A1A] py-8 px-12 md:px-20">
            <div className="flex flex-col md:flex-row justify-between sm:items-start  gap-2 max-w-7xl mx-auto">
            {footerLinks.map((link)=>
            <div key={link.header} className="flex flex-col">
                <h1 className="font-fashion text-xl md:text-2xl font-bold my-2 text-[#FFFFFF]"> {link.header}</h1>
               <div className={`flex flex-col gap-3 md:gap-4 ${link.icons ? 'flex-row' : ''}`}>
                {link.sub.map((sub, index) => {
                  if (typeof sub === "string") {
                        return  <span key={index} className={`text-[#9CA3AF] text-sm md:text-sm font-nav leading-tight ${link.break ? 'max-w-[247px]' : ''}`}>{sub}</span>
                    }

                const Icon = sub.Icon;
                return  <div key={sub.name} className="flex-row"><Icon key={index} className="text-[#9CA3AF]" /></div> 

                })}
                {link.Icon && (
                <link.Icon className="w-6 h-4 mb-2 rounded-full" />
                )}
                </div>
            </div>
            )}
            </div>
        </footer>
    )
}

export default Footer