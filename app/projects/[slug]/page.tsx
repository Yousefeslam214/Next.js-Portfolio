import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Play } from "lucide-react";
import { projectsData } from "@/lib/data";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found | Yousef" };

  return {
    title: `${project.title} | Yousef`,
    description: project.description,
  };
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-4">
      <div className="mb-6">
        <Link
          href="/#projects"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ← Back to home
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="mt-2 text-gray-700 dark:text-white/70">
          {project.description}
        </p>
  <div className="mt-5 relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-black/5 bg-white/60 shadow-sm dark:bg-white/10">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              <Play className="h-4 w-4" />
              Video
            </a>
          )}
        </div>
      </header>

      {/* <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-black/5 bg-white/60 shadow-sm dark:bg-white/10">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
      </div> */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About this project</h2>
        {(project.details ?? []).map((paragraph) => (
          <p key={paragraph} className="text-gray-800 dark:text-white/80">
            {paragraph}
          </p>
        ))}

        {!!project.highlights?.length && (
          <div className="pt-2">
            <h3 className="text-lg font-semibold">Highlights</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-800 dark:text-white/80">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <div className="mt-10">
        <Link
          href="/projects"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View all projects →
        </Link>
      </div>
    </main>
  );
}
