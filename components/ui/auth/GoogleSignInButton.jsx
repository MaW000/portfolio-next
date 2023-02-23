import { useSession, signIn, signOut } from "next-auth/react";

export default function GoogleSignInButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-14">
      <h1 className="font-bold text-4xl">
        Welcome.
        <br />
        Log in to view the dashboard
      </h1>
      <button
        className="bg-black p-2 text-xl font-medium w-full text-white min-w-[25%] rounded-sm"
        onClick={() => signIn()}
      >
        Log In
      </button>
    </div>
  );
}
