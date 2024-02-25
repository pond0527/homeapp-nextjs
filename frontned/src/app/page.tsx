import { getServerSession } from "next-auth";
import { authOptions } from "./auth_config";
import styles from "./page.module.css";
import { signIn, signOut } from 'next-auth/react'

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.main}>
      {!session && <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </main>
  );
}
