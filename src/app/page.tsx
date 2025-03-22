import HomePageContent from "@/components/HomePageContent";
import { RandomBubblesMotion } from "@/components/RandomBubblesMotion";

export default function Home() {
  return (
    <div className="h-full relative">
      <RandomBubblesMotion
        className="absolute h-screen w-screen"
        bubbleCount={20}
      />
      <HomePageContent />
    </div>
  );
}
