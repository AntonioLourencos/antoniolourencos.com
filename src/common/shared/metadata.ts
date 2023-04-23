import type { Metadata } from "next";

function getMetadata(customMetadata?: Metadata): Metadata {
  return {
    title: "Antonio Lourenço | Full Stack Developer and Front-end Specialist",
    description:
      "I am a Full Stack Developer and Front-end Specialist with expertise in web and mobile development, backend systems, and devops. Check out my portfolio to see my work!",
    applicationName: "Antonio Lourenço",
    authors: {
      name: "Antonio Lourenço",
    },
    keywords: [
      "Full Stack Developer",
      "Front-end Specialist",
      "Web Development",
      "Mobile Development",
      "Backend Systems",
      "DevOps",
      "ReactJS",
      "React Native",
      "Next.js",
      "Express",
      "Adonis",
      "NestJS",
      "Flask",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Amazon S3",
      "Amazon Code Commit",
      "Spanish",
      "English",
    ],
    referrer: "no-referrer",
    colorScheme: "dark",
    viewport: "width=device-width, initial-scale=1.0",
    publisher: "Antonio Lourenço",
    openGraph: {
      title: "Antonio Lourenço | Full Stack Developer and Front-end Specialist",
      url: "",
      description:
        "I am a Full Stack Developer and Front-end Specialist with expertise in web and mobile development, backend systems, and devops. Check out my portfolio to see my work!",
    },
    manifest: "",
    twitter: {
      site: "AntonioLourencos.com",
      creator: "@AntonioLourencos",
      title: "Antonio Lourenço | Full Stack Developer and Front-end Specialist",
      description:
        "I am a Full Stack Developer and Front-end Specialist with expertise in web and mobile development, backend systems, and devops. Check out my portfolio to see my work!",
    },
    ...customMetadata,
  };
}

export default getMetadata;
