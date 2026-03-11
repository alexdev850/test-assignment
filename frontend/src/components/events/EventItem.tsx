import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Event } from '@/types';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { format } from 'date-fns';

interface EventItemProps {
  event: Event;
}

export function EventItem({ event }: EventItemProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{event.title}</CardTitle>
          </div>
          <CardDescription className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            {format(new Date(event.date), 'PPP')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPinIcon className="w-4 h-4" />
            {event.location}
          </p>
          <p className="line-clamp-2 text-sm">{event.shortDescription}</p>
        </CardContent>
        <CardFooter>
          <Badge variant="secondary">View Details</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
