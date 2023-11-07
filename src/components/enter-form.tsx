"use client";

import { useFormState } from "react-dom";
import { verifyPassword } from "@/lib/actions";

export default function EnterForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(verifyPassword, initialState);

  return (
    <div className="w-72 h-24 p-4 relative flex flex-col justify-center items-center bg-night-900 border border-neutral-800">
      <form action={dispatch}>
        <input
          name="password"
          placeholder="password"
          aria-describedby="password-error"
          className="p-1 bg-night-800 border border-neutral-800 focus-visible:outline-none focus-visible:outline-kb-green-dark"
        />
      </form>
      <div className="absolute bottom-2">
        {state.errors?.password ? (
          <div id="password-error" aria-live="polite">
            {state.errors.password.map((error: string) => (
              <p key={error} className="text-xs text-kb-green-dark">{error}</p>
            ))}
          </div>
        ) : null}
        {state.message ? (
          <div aria-live="polite">
            <p className="text-xs text-kb-green-dark">{state.message}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
