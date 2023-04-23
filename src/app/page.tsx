"use client";

// Components
import Welcome from "../components/welcome";
import CurrentStack from "../components/currentStack";
import ExperiencesAndProjects from "../components/experiencesAndProjects";

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
