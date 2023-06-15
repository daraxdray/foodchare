import Footer from "../components/partials/footer/Footer";
import Navbar from "../components/partials/header/NavBar/index";
import CheckoutCard from "../components/Cards/CheckoutCard";

export default function Home() {
  return (
    <>
      <Navbar />{" "}
      <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 tracking-wide md:tracking-wide font-poppins ">
        <CheckoutCard />
      </main>
      <div className="flex flex-col items-center justify-between bg-secondary-grey">
        <Footer />
      </div>
    </>
  );
}
