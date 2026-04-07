import Personal from "./personal/page";
import Professional from "./professional/page";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Personal />
    </main>
  );
}