"use server";

import { z } from "zod";
import { setVerifiedCookie } from "@/lib/verification";

const PasswordSchema = z.object({
  password: z.string(),
});

// const VerifyPassword = PasswordSchema.omit({});

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    password?: string[];
  };
  message?: string | null;
};

export async function verifyPassword(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedField = PasswordSchema.safeParse({
    password: formData.get("password")
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: 'Failed to verify password.',
    };
  }

  // Verify validated password input
  const inputPassword = validatedField.data.password;
  const pagePassword = process.env.MUSIC_PAGE_PASSWORD;

  if (!pagePassword) {
    return {
      message: 'Page password is undefined.',
    };
  }

  if (inputPassword === pagePassword) {
    setVerifiedCookie();
    console.log(`[verifyPassword] Verified!`);
    return {
      message: 'Password verified.',
    };
  } else {
    console.log(`[verifyPassword] Not verified.`);
    // TODO: Handle incorrect password
    return {
      message: 'Password is incorrect.',
    };
  }
}
