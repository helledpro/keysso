import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackMedia Competitor Intelligence",
  description: "Внутренняя система конкурентной разведки BlackMedia",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
