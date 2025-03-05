import services from "../jsfile/services";

export const Services = () => {
  return (
    <div id="services" className="our-services m-10 mb-10">
      <p className="text-center font-semibold text-5xl text-zinc-700 m-10 underline">
        {" "}
        Our Services
      </p>
      <div className="service-card-containeer flex gap-5 justify-evenly">
        {services.map((item, index) => (
          <div
            key={index}
            className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out"
          >
            <div className="img-div">
              <img src={item.image} alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700 mt-5">{item.name}</p>
            </div>
          </div>
        ))}
        {/* <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
           
            <div className="img-div">
              <img src="3D-plan.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700 mt-5"> 3D Plan</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="site-visiting.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700"> Site Visiting</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="furniture.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700"> Furniture</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="furniture.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700">Construction</p>
            </div>
          </div>
          <div className="services-card border rounded p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1 hover:skew-y-1 duration-300 ease-in-out">
            <div className="img-div">
              <img src="furniture.jpg" alt="" className="w-80 h-60" />
              <p className="text-2xl py-2 text-zinc-700">Fasle Cieling</p>
            </div>
          </div> */}
      </div>
    </div>
  );
};
