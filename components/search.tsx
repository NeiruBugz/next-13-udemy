"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Search() {
  const [location, setLocation] = useState("");
  const router = useRouter();
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.currentTarget.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white disabled:bg-red-600/50 disabled:cursor-not-allowed"
        disabled={location === ""}
        onClick={() => {
          router.push(`/search`);
        }}
      >
        Let&apos;s go
      </button>
    </div>
  );
}
