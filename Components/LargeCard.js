import Image from "next/image";
import { useRouter } from "next/router";
function LargeCard({ img, title, description, buttonText}) {
  const router = useRouter();
  return (
    <section onClick={() =>
      router.push(
        "/search?location=Enfield&startDate=2023-04-19T23%3A00%3A00.000Z&endDate=2023-04-26T23%3A00%3A00.000Z&numberOfGuests=2"
      )
    }
    className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] my-6">
        <Image
          src={img}
          alt="image"
          className="rounded-2xl"
          fill
          style={{
            objectFit: "cover",
            layout: "fill",
            marginTop: "3px",
          }}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl font-semibold mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
