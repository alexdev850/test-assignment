'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from '@/types';
import { RegistrationModal } from '@/components/RegistrationModal';

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Button 
        variant="ghost" 
        onClick={() => router.push('/events')} 
        className="mb-8 pl-0"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to list
      </Button>

      <div className="space-y-6">
        <div className="space-y-2">
          <Badge className="mb-2">Event Details</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">{event.title}</h1>
        </div>

        <div className="flex flex-wrap gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">{format(new Date(event.date), 'PPPP')}</span>
            <span>at {format(new Date(event.date), 'p')}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">{event.location}</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none pt-6 border-t">
          <h3 className="text-lg font-semibold mb-2">About this event</h3>
          <p className="text-lg leading-relaxed text-slate-700">
            {event.description}
          </p>
        </div>

        <div className="pt-10">
          <Button size="lg" className="px-8 h-12 text-lg" onClick={() => setIsModalOpen(true)}>
            Register for this Event
          </Button>
        </div>
      </div>

      <RegistrationModal 
        eventId={event.id} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
