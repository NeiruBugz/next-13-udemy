import { Search } from "@/components/search";

export function Header({
  withSearch,
  heading,
}: {
  withSearch: boolean;
  heading: string;
}) {
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        {heading ? (
          <h1 className="text-white text-5xl font-bold mb-2">{heading}</h1>
        ) : null}
        {withSearch ? <Search /> : null}
      </div>
    </div>
  );
}
