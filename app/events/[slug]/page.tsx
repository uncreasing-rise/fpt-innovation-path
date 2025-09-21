import { notFound } from "next/navigation";
import { eventsData } from "@/app/data/eventsData";
import EventDetail from "@/app/components/EventDetail";

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // await params nếu cần (Next.js muốn truy cập async-safe)
  const { slug } = await params; // <-- sửa đây

  const event = eventsData.find((e) => e.id === slug);

  if (!event) return notFound();

  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col">
      {/* Header hoặc navbar nếu có thể đặt ở đây */}
      <main className="flex-1 w-full py-16 px-4 md:px-8 lg:px-16">
        <EventDetail event={event} />
      </main>
    </div>
  );
}
