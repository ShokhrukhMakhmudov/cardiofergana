import Location from "'@/components/Location";
import News from "'@/components/News";
import ServicesComp from "'@/components/Services/homepage";
import Statistics from "'@/components/Statistics";
import Team from "'@/components/Team";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <News />
        <Statistics />
        <ServicesComp />
        <Team />
        <Location />
      </main>
    </>
  );
}
