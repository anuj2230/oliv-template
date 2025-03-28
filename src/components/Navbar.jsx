const Navbar = () => {
    const data =[
        {info:  "Work"},
        {info: "Services"},
        {info: "About"},
        {info: "Blog"},
        {info: "Pages"},
        {info: "Cart"}
    ]
  return (
    <div className="px-12">
    <div className=" pt-12 pb-4 flex align-center justify-between">
      <div className="flex align-center gap-5">
        <img className="h-8" src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg"  />
        <h2 className="bg-[#f8ede3]  rounded-full px-2.5 py-1.5">We are hiring!</h2>
      </div>
      <div className="flex gap-10">
        <div  className="flex gap-10 mt-2">
      {data.map((elem, index) => (
          <h3 key={index}>{elem.info}</h3>
        ))}
        </div>
        <h2 className="border-1 hover:bg-black hover:text-white font-[450] rounded-full px-2 py-1.5 ">Get in Touch</h2>
      </div>
    </div>
    <div className="h-[1px] mb-2 w-full  bg-gray-300"></div>
    </div>
  )
}

export default Navbar
