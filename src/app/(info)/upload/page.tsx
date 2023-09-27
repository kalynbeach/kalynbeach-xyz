'use client';

import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import PageHeading from "@/ui/PageHeading";

export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <>
      <PageHeading emoji="💿" name="upload" />
      <form
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
        <input name="file" type="file" ref={inputFileRef} required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
