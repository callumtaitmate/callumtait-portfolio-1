import Image from "next/image";
function SmallCard({ img, distance, location }) {
  return (
    <div>
      <div className="flex box item-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-95 transition transform duration-200 ease-out">
        <div className="relative h-16 w-16">
          <Image
            src={img}
            alt="image"
            className="rounded-lg"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "left",
              layout: "fill",
              marginTop: "3px",
            }}
          />
        </div>
        <div>
          <h2 className="font-medium">{location}</h2>
          <h3 className="text-gray-400">{distance}</h3>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
