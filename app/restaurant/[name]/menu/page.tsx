import { Header } from "@/components/header";
import { MenuCard } from "@/components/restaurant/menu-card";
import { Navbar } from "@/components/restaurant/navbar";

export default function RestaurantMenuPage() {
  return (
    <>
      <Header withSearch={false} heading="Milestones Grill (Toronto)" />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <Navbar />
          <main className="bg-white mt-5">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">Menu</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                <MenuCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
