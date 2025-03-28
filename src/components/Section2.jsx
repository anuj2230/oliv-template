const Section2 = () => {
 const data =[
     {heading: "Brand Strategy" , Content:"We help businesses define their unique brand message and branding positioning." ,About:"About Strategy"},
     {heading:"Visual Identity" , Content:"We create visual elements such as logos, packaging, and marketing materials for your brand.",About:"About Identity"},
     {heading:"Digital Marketing" , Content:"We help businesses to promote their brand online and create engaging digital experiences.",About:"About Marketing"},
     {heading:"Brand Manage­ment" , Content:"We help businesses to implement their brand across all touchpoints and ensure consistency.",About:"About Management"},
  ]
  return (
    <div className="px-12">
    <div className=" flex justify-between mt-20 p-10">
        { data.map((item,index) =>(
             <div key={index} className="mb-6 p-3 bg-gray-100 h-auto w-[220px]">
             <h1 className="text-2xl mb-5 font-bold">{item.heading}</h1>
             <h2 className="text-lg mb-5 text-gray-600 ">{item.Content}</h2>
             <h3 className="text-black-500 border-b-1 border-black-500 inline-block">{item.About}</h3>
         </div>
        ))}
    </div>
    <h1 className="mb-8 text-xl text-gray-600 mt-24">Our Work</h1>
    <div className="w-full h-[1px] bg-gray-200 "></div>
    </div>
  )
}

export default Section2
