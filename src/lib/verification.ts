import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const cookieName = process.env.MUSIC_PAGE_COOKIE_NAME;
const cookieValue = process.env.MUSIC_PAGE_COOKIE_VALUE;

export function checkVerifiedCookie(
  request?: NextRequest,
  name: string = cookieName!,
) {
  let cookie: RequestCookie | undefined;

  if (!request) {
    cookie = cookies().get(name);
  } else {
    cookie = request.cookies.get(name);
  }

  if (cookie) {
    return true;
  }

  return false;
}

export function setVerifiedCookie(
  response?: NextResponse,
  name: string = cookieName!,
  value: string = cookieValue!,
) {
  if (response) {
    response.cookies.set({ name, value, httpOnly: true, path: "/" });
  } else {
    cookies().set({ name, value, httpOnly: true, path: "/" });
  }
}

export function verify(): boolean {
  const isVerified = checkVerifiedCookie();
  return isVerified;
}
