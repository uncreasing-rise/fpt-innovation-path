import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/app/types";
import ProjectDetail from "./ProjectDetail";

// --- Metadata động ---
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Dự án không tồn tại" };
  return {
    title: `${project.name} | FPT Innovation Path`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
