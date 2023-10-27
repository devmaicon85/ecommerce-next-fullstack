import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "../providers/auth-context";
import "./globals.css";
import { CartProvider } from "@/providers/cart-context";
import { Sheet } from "@/components/ui/sheet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | devStore",
    default: "devStore",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} `}>
        <div className="flex h-screen flex-col overflow-y-scroll  pr-5">
          <AuthProvider>

            <CartProvider>
              <Header>
                <main>
                  {children}
                </main>
              </Header>
              <Footer />
            </CartProvider>

          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
