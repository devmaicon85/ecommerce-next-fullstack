import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <AuthProvider>

            <CartProvider>
              <Header />
              <main className=" flex-1 mt-20">
                {children}
              </main>
              <Footer />
            </CartProvider>

          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
