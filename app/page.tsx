import CardList from "@/components/CardList";
import "@/styles/globals.css";

export default function Home() {
  return (
    <main>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: 90 }}
      >
        <CardList />
      </div>
    </main>
  );
}
