const Section3 = () => {
    const data = [
        {img:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b981e34f347cacdc73b6_project-01-thumb.webp" , head: "Invision Studio" ,btn:"Branding"},
        {img:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b96d86c0c985079d8d60_project-02-thumb.webp" , head: "Square Media" ,btn:"Marketing"},
        {img:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b953a2c1a5706f63bbe1_project-03-thumb.webp" , head: "Vision Design" ,btn:"Social Media"},
        {img:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b943f334e17d7007a0ea_project-04-thumb.webp" , head: "Design Bros" ,btn:"Branding"},
    ]
  return (
    <div className="p-12" >
      <div className="flex justify-between mb-10">
        <h1 className="text-6xl">Selected Work</h1>
        <h2 className="text-2xl h-12 w-30 mt-2 pl-4 pt-1 hover:bg-black hover:text-white border-1 border-black rounded-full font-[300]">All Work</h2>
      </div>
      <div className="flex justify-between flex-wrap gap-8 ">
                {data.map((item, index) => (
                    <div key={index} className="">
                        <img src={item.img} className="w-[590px] h-[430px] object-cover shadow-md mb-5" />
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-medium">{item.head}</h3>
                            <button className="px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-black hover:text-white transition">
                                {item.btn}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
       
           <div className="w-full h-[1px] bg-gray-200 "></div>
    </div>
  )
}

export default Section3
