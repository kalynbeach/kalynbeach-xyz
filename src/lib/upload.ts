// import { put } from "@vercel/blob";

// type Body = string | Blob | ArrayBuffer | FormData | ReadableStream<any> | File;

// export async function uploadBlob(filename: string, body: Body): Promise<string> {
//   console.log(`[uploadBlob] Uploading '${filename}'`);
//   // const { url } = await put(filename, body, { access: 'public' });
//   const blob = await put(filename, body, { access: "public" });
//   console.log(`[uploadBlob] * Done - URL: '${url}'`);
//   return url;
// }

export async function hello() {
  console.log("Hello from upload.ts");
}
