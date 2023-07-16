import { Header } from "@/components/header";
import { RestaurantCard } from "@/components/restaurant-card";

export default function Home() {
  return (
    <main>
      <Header withSearch heading="Find your table for any occasion" />
      {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
      {/* CARDS */}
    </main>
  );
}
