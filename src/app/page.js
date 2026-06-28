
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";
import HomeContact from "@/components/sections/contact";
import HomeExperience from "@/components/sections/experience";
import HomeProjects from "@/components/sections/projects";
import HomeSkills from "@/components/sections/skills";
import HomeHero from "@/components/sections/hero";

const reactComp = [
  { Comp: HomeHero, name: `hero` },
  { Comp: HomeExperience, name: `experience` },
  { Comp: HomeSkills, name: `skills` },
  { Comp: HomeProjects, name: `projects` },
  { Comp: HomeContact, name: `contact` },
]

export default function Home() {
  return (
    <div className="overflow-scroll flex items-center justify-center font-sans">
      <main className="absolute top-0 left-0 flex w-full flex-col items-center justify-between">
        <Header />

        {/* <MeshBackgroundHero /> */}
        {/* <MeshBackgroundRepeat /> */}
        {
          reactComp.map((obj, idx) => {
            const { Comp, name } = obj

            return <section
              className="w-full h-screen"
              key={`${idx}-${name}`}
            >
              <div className="w-full h-full">
                <Comp>

                </Comp>
              </div>
            </section>
          })
        }

        <Footer />
      </main>
    </div >
  );
}
