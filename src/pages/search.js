import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useRouter } from "next/dist/client/router";
import { parse, parseISO, formatISO, format, formatISO9075 } from "date-fns";
import InfoCard from "../../Components/InfoCard";
function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} Guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays between <b>{range}</b> for <b>{numberOfGuests}</b> Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-5">
            Stays in {location}
          </h1>
          <div className="hidden sm:inline-flex mb-2 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="searchFilter__Button">Cancellation Flexibility</p>
            <p className="searchFilter__Button">Type of Place</p>
            <p className="searchFilter__Button">Price</p>
            <p className="searchFilter__Button">Rooms and Beds</p>
            <p className="searchFilter__Button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
