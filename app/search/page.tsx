import { Header } from "@/components/header";
import { Result } from "@/components/search/result";
import { SideBar } from "@/components/search/side-bar";

export default function SearchPage() {
  return (
    <>
      <Header withSearch heading="" />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar />
        <div className="w-5/6">
          <Result />
        </div>
      </div>
    </>
  );
}
