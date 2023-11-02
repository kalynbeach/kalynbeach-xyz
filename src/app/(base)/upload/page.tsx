'use client';

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import PageHeading from "@/components/page-heading";

export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <>
      <PageHeading emoji="💿" name="upload" />
      <section className="flex flex-col gap-2">
        <form
          className="p-4 flex flex-col gap-2 bg-night-900 border border-neutral-900 text-sm font-mono"
          onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const file = inputFileRef.current?.files?.item(0);
            const response = await fetch(
              `/api/upload?filename=${file?.name}`,
              {
                method: "POST",
                body: file
              }
            );
            const newBlob = (await response.json()) as PutBlobResult;
            setBlob(newBlob);
          }}
        >
          <input name="file" type="file" ref={inputFileRef} required className="p-4 bg-neutral-900 border border-neutral-900 hover:border-neutral-800 cursor-pointer" />
          <button type="submit" className="p-2 bg-neutral-900 transition border border-neutral-900 hover:border-neutral-800">Upload</button>
        </form>
        {blob && (
          <div className="">
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </section>
    </>
  );
}
