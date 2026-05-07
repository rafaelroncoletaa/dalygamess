"use client";

import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Input() {
  const router = useRouter();

  function handleSearch(formData: FormData) {
    const game = formData.get("game");

    if (!game) return;
    router.push(`/game/search/${game}`);
  }

  return (
    <form
      action={handleSearch}
      className="w-full bg-slate-200 my-5 flex justify-between items-center gap-2 rounded-lg p-2"
    >
      <input
        name="game"
        className="bg-slate-200 outline-0 w-11/12"
        type="text"
        placeholder="Procurando algum jogo?"
      />
      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
