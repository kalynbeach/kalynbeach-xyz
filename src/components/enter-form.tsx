"use client";

import { useState } from "react";
import { handleEnterFormInput } from "@/app/(music)/music/actions";

export default function EnterForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    const data = new FormData(event.target as HTMLFormElement);
    const isVerified = await handleEnterFormInput(data);
    if (!isVerified) {
      setMessage("incorrect password");
    }
  };

  return (
    <div className="w-72 h-24 p-4 relative flex flex-col justify-center items-center bg-night-900 border border-neutral-800">
      <form onSubmit={handleSubmit}>
        <input
          name="password"
          placeholder="password"
          className="p-1 bg-night-800 border border-neutral-800 focus-visible:outline-none focus-visible:outline-kb-green-dark"
        />
      </form>
      <div className="absolute bottom-2">
        {message && <p className="text-xs text-kb-green-dark">{message}</p>}
      </div>
    </div>
  );
}
