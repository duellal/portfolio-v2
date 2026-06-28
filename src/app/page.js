
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";

export default function Home() {
  return (
    <div className="overflow-scroll flex items-center justify-center font-sans">
      <main className="absolute top-0 left-0 flex w-full flex-col items-center justify-between">
        <Header />

        {/* <MeshBackgroundHero /> */}
        {/* <MeshBackgroundRepeat /> */}
        <section className="w-full h-screen">
          <div className="w-full h-full">
          </div>
        </section>

        <section className="w-full h-screen">
          <div className="w-full h-full">
          </div>
        </section>

        <section className="w-full h-screen">
          <div className="w-full h-full">
          </div>
        </section>

        <section className="w-full h-screen">
          <div className="w-full h-full">
          </div>
        </section>

        <section className="w-full h-screen">
          <div className="w-full h-full">
          </div>
        </section>
        {/* </MeshBackgroundRepeat> */}

        <Footer />
      </main>
    </div >
  );
}
