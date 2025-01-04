import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
const Skill = () => {
  return (
    <div className=" max-w-7xl mx-auto flex">
      <p className="text-white text-3xl my-10">Frontend and Backend Skill</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-6/12">
        <div className="card card-compact bg-base-100 w-40 h-[200] shadow-xl hover:scale-105 duration-500 transition-all ease-in-out hover:shadow-2xl ">
          <figure>
            <img
              src="https://i.ibb.co.com/Pg2DHsg/Java-Script-logo.png"
              alt=""
              className="h-[300px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-500 transition-all ease-in-out hover:shadow-2xl">
          <figure>
            <img
              src="https://i.ibb.co.com/w4Q8mtg/tailwind-css-logo-vector.png"
              alt=""
              className="h-[300px] w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-500 transition-all ease-in-out hover:shadow-2xl">
          <figure>
            <img
              src="https://i.ibb.co.com/tb068SK/react-js.png"
              alt=""
              className="h-[300px] w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-500 transition-all ease-in-out hover:shadow-2xl">
          <figure>
            <img
              src="https://i.ibb.co.com/zm1trJs/mongodb.png"
              alt=""
              className="h-[300px] w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MongoDB</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-500 transition-all ease-in-out hover:shadow-2xl">
          <figure>
            <img
              src="https://i.ibb.co.com/7r1SMhc/express.png"
              alt=""
              className="h-[300px] "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">EXPRESS.JS</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 duration-500 transition-all ease-in-out hover:shadow-2xl">
          <figure>
            <img
              src="https://i.ibb.co.com/ZBxSLGm/node.png"
              alt=""
              className="h-[300px] w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">EXPRESS.JS</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
