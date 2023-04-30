"use client";

// Components
import Welcome from "../components/home/welcome";
import CurrentStack from "../components/home/currentStack";
import ExperiencesAndProjects from "../components/home/experiencesAndProjects";

export default function Home() {
  return (
    <main className="flex flex-col grow">
      <Welcome />

      <div className="flex flex-col gap-16">
        <CurrentStack />
        <ExperiencesAndProjects />
      </div>
    </main>
  );
}
