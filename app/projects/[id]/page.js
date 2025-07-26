import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params; // Await params
  const project = projects.find((p) => p.id == id);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link href="/" className="text-primary mt-4 block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        <Link href="/" className="flex items-center text-primary mb-6">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <div className="relative w-full h-[500px] mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-primary text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Challenges:</h4>
          <ul className="list-disc ml-6">
            {project.challenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Future Improvements:</h4>
          <ul className="list-disc ml-6">
            {project.improvements.map((improve, idx) => (
              <li key={idx}>{improve}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-primary text-white px-4 py-2 rounded"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded"
          >
            <FaGithub className="mr-2" /> View Code
          </a>
        </div>
      </div>
    </section>
  );
}
