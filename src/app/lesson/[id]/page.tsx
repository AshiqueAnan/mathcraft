import { notFound } from "next/navigation";
import { BUILT_LESSONS, getLesson } from "@/content/lessons";
import { TutorProvider } from "@/components/tutor/TutorContext";
import { LessonClient } from "./LessonClient";

export function generateStaticParams() {
  // Derive from built lessons so new content auto-generates routes.
  return BUILT_LESSONS.map((l) => ({ id: l.id }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  return (
    <TutorProvider>
      <LessonClient lesson={lesson} />
    </TutorProvider>
  );
}