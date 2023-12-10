import type { Metadata } from "next";
import "./globals.css";
import { cn } from "./common/libs/utils";
import { inter, jakartaSans } from "./common/libs/fonts";
import { ThemeProvider } from "./common/components/ThemeProvider";
import Header from "./common/components/header";
import AOS from "./common/components/AOS";
import "aos/dist/aos.css";
import Layout from "./common/components/layout";
import QueryClientProvider from "./common/components/QueryClientProvider";
import { NextMetadata } from "./common/libs/metadata";
import BannerProvider from "./common/components/BannerProvider";
import Banner from "./common/components/Banner";
import Opener from "./common/components/Opener";

export const metadata: Metadata = NextMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background relative font-sans antialiased",
          jakartaSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider>
            <BannerProvider>
              <Opener />
              <Banner />
              <Header />
              <Layout>{children}</Layout>
            </BannerProvider>
          </QueryClientProvider>
        </ThemeProvider>
        <AOS />
      </body>
    </html>
  );
}
