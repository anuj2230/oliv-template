import { motion } from "framer-motion";
//jj
const Section1 = () => {
    const data=[
        {logo:"https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce6a0062cf2d279e35_client-logo-02.svg"},
        {logo:"https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce9f1b45e141bf28b5_client-logo-03.svg"},
        {logo:"https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418ce2c404b364300ba31_client-logo-04.svg"},
        {logo:"https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabe252e43b0c0_client-logo-07.svg"},
        {logo:"https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c418cea9dabef95143b0c1_client-logo-06.svg"},
    ]
  return (
    <div className="mt-36 px-12">
      <h1 className="text-8xl font-[350] leading-none tracking-[-4px]">Building Brands, One <br/> Success Story at a Time.</h1>
      <h2 className="text-[29px] mt-8 font-[250]">Create a Brand That Resonates: We Can Help You <br/> Define and Communicate Your Unique Message.</h2>
      <h2 className="mt-16 border-1 bg-black w-30 pt-3 text-white pl-3 h-[50px] rounded-full animate-bounce">Our Services</h2>
      <div className="overflow-hidden mt-8 w-full gap-20 bg-white py-4">
                <motion.div
                    className="flex gap-36 mt-8 space-x-12"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                >
        {data.map((item,key) =>(
            <img key ={key} src={item.logo} />
        ))}
           </motion.div>
      </div>
    </div>
  )
}

export default Section1
