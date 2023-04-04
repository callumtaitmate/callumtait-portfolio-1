import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex mt-2 py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-53 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt=""
          fill
          className="rounded-lg"
          style={{
            objectFit: "cover",
            objectPosition: "left",
            layout: "fill",
            marginTop: "3px",
            
          }}
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>Private room in the center of {location}</p>
          <HeartIcon className="h-7 cursor-pointer text-gray-300" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className=" text-sm text-gray-500">{description}</p>
        <div className="flex justify-between items-end pt-5">
            <p className="flex items-center"><StarIcon className="h-5 text-red-400" />{star}</p>
            <div>
                <p className="text-lg font-semibold pb-2 lg:text-xl">{price}</p>
                <p className="text-right font-extralight">{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
