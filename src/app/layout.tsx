import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import DevToolsProvider from "~/components/Providers/DevToolsProvider";
import { cn } from "~/lib/utils";
import { db } from "~/server/db";
import "~/styles/globals.css";
import StoreProvider from "../components/Providers/StoreProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CubeTrainer",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const solves = await db.query.solves.findMany();
  return (
    <html
      lang="en"
      className={cn(" bg-background font-sans antialiased", fontSans.variable)}
    >
      <body className="bg-[#12141c]">
        <StoreProvider solves={solves}>
          <DevToolsProvider>
            <div className="relative flex min-h-dvh">{children}</div>
          </DevToolsProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
