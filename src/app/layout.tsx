import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CubeTrainer",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background min-h-screen font-sans antialiased",
        fontSans.variable,
      )}
    >
      <body className="flex gap-2 bg-[#12141c]">{children}</body>
    </html>
  );
}
