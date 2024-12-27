import {
  NavBar,
  Header,
  VerifyNearYou,
  DispensariesBuzz,
  Articles,
} from "./components";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="">
          <NavBar />
          <Header />
          <VerifyNearYou />
          <DispensariesBuzz />
          <Articles />
        </div>
      </main>
    </div>
  );
}
