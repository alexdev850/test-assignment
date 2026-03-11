'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEvent } from '@/hooks/useEvents';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { EventDetails } from '@/components/events/EventDetails';

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { event, loading, error } = useEvent(Number(id));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Event Not Found</h2>
        <p className="text-muted-foreground mt-2">{error || "The event you're looking for doesn't exist."}</p>
        <Button onClick={() => router.push('/events')} className="mt-4">Back to Events</Button>
      </div>
    );
  }

  return <EventDetails event={event} />;
}
