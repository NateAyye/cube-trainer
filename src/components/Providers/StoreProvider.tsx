"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { type solves as dbSolves } from "~/server/db/schema";
import { setSolves } from "~/store/features/solves/solvesSlice";
import { makeStore, type AppStore } from "../../store/store";

export default function StoreProvider({
  children,
  solves,
}: {
  children: React.ReactNode;
  solves: (typeof dbSolves.$inferSelect)[];
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setSolves(solves));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
