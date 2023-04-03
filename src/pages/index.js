import Head from "next/head";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import SmallCard from "../../Components/SmallCard";
import MediumCard from "../../Components/MediumCard";
import LargeCard from "../../Components/LargeCard";
import Footer from "../../Components/Footer";
export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>callumtait-portfolio-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ key, img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData?.map(({ key, img, title }) => (<MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <div>
          <LargeCard img="https://links.papareact.com/4cj"
          title="The Greateset Outdoors"
          description="Wishlists curated by AirBnB"
          buttonText="Get Inspired" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
