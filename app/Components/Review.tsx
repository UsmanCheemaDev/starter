import React from "react";
import client from "../../public/Client.png";
import Image from "next/image";

const Review = () => {
  return (
    <div className="bg-white text-black pt-10">
      <h1 className="font-bold text-3xl tracking-widest text-center">
        {" "}
        Testimonials{" "}
      </h1>
      <div className=" flex flex-col lg:flex-row justify-evenly pt-5 text-justify">
        <div className=" bg-gray-300 p-10 mt-10 ml-10 mr-10">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex
            ut debitis atque ea numquam velit architecto delectus distinctio
            officiis rerum quam illum, dolorum modi rem impedit nulla eaque.
            Excepturi!
          </p>

          <div className=" flex pt-5">
            <div className=" w-1/4 rounded-full  h-10 ">
              <Image src={client} width={50} height={50} alt="client" />
            </div>

            <div>
              <h1> Google </h1>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>

        <div className=" bg-gray-300 p-10 mt-10 ml-10 mr-10">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex
            ut debitis atque ea numquam velit architecto delectus distinctio
            officiis rerum quam illum, dolorum modi rem impedit nulla eaque.
            Excepturi!
          </p>

          <div className="flex pt-5 ">
            <div className=" w-1/4 rounded-full h-10 ">
              <Image src={client} width={50} height={50} alt="client" />
            </div>

            <div>
              <h1> Google </h1>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 p-10 mt-10 ml-10 mr-10">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex
            ut debitis atque ea numquam velit architecto delectus distinctio
            officiis rerum quam illum, dolorum modi rem impedit nulla eaque.
            Excepturi!
          </p>

          <div className="flex pt-5">
            <div className=" w-1/4 rounded-full  h-10 ">
              <Image src={client} width={50} height={50} alt="client" />
            </div>

            <div>
              <h1> Google </h1>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-evenly pt-5 text-justify">
        <div className=" bg-gray-300 p-10 mt-10 ml-10 mr-10">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex
            ut debitis atque ea numquam velit architecto delectus distinctio
            officiis rerum quam illum, dolorum modi rem impedit nulla eaque.
            Excepturi!
          </p>

          <div className=" flex pt-5">
            <div className=" w-1/4 rounded-full h-10 ">
              <Image src={client} width={50} height={50} alt="client" />
            </div>

            <div>
              <h1> Google </h1>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>

        <div className=" bg-gray-300 p-10 mt-10 ml-10 mr-10">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex
            ut debitis atque ea numquam velit architecto delectus distinctio
            officiis rerum quam illum, dolorum modi rem impedit nulla eaque.
            Excepturi!
          </p>

          <div className="flex pt-5 ">
            <div className=" w-1/4 rounded-full h-10 ">
              <Image src={client} width={50} height={50} alt="client" />
            </div>

            <div>
              <h1> Google </h1>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 p-10 mt-10 ml-10 mr-10">
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ex
            ut debitis atque ea numquam velit architecto delectus distinctio
            officiis rerum quam illum, dolorum modi rem impedit nulla eaque.
            Excepturi!
          </p>

          <div className="flex pt-5">
            <div className=" w-1/4 rounded-full h-10 ">
              <Image src={client} width={50} height={50} alt="client" />
            </div>

            <div>
              <h1> Google </h1>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
