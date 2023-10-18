"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return <div>Hello Word - {data?.user?.email}</div>;
}
