import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { authOptions, handler } from "../auth_config";
import { getServerSession } from "next-auth";


export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  const { signIn } = handler

  if (session) {
    return redirect("/");
  }

  return (
    <form
    // action={async () => {
    //   "use server";
    //   await signIn("GitHub");
    // }}
    >
      <button
        className="my-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() =>
          // signIn("github", {
          //   callbackUrl: `${window.location.origin}`,
          // })
          signIn("GitHub")
        }
      >
        Login with
      </button>
    </form>
  );
}