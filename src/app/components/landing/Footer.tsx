import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa"

function Footer() {

    const footerLinks = [
        {header: "Fasshion", sub: "Your destination for authentic luxury fashion from the world's most prestigious designers."},
        {header:"Shop", sub: ["New Arrivals", "Men", "Women", "Sale", "Gift Cards"]},
        {header:"Customerr Care", sub: ["Contact Us", "Shipping Info", "Returns", "Sales Guide", "FAQ"]},
        {header:"About", sub:["Our Story", "Sustainability", "Careers", "Press", "Privacy Policy"]},
        {header: "Follow Us", sub:[
       { name : "Instagram", Icon : FaInstagram},
       {name: "Facebook", Icon: FaFacebook},
       {name: "Twitter", Icon: FaTwitter},
       {name: "pinterest", Icon: FaPinterest}
        ]}
    ]

    return (
        <footer className="bg-[#1A1A1A]">
            <div className=""></div>
        </footer>
    )
}

export default Footer