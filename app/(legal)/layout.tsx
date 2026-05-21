import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}
