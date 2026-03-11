import { EventItem } from './EventItem';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Event, PaginatedResponse } from '@/types';

interface EventListProps {
  data: PaginatedResponse<Event> | null;
  loading: boolean;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function EventList({ data, loading, currentPage, onPageChange }: EventListProps) {
  if (loading && !data) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <div className="text-center py-20 bg-muted/30 rounded-lg">
        <p className="text-xl font-medium">No events found</p>
        <p className="text-muted-foreground">Try to change your filters</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === 1 || loading}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">
          Page {data.page} of {data.totalPages}
        </span>
        <Button
          variant="outline"
          size="icon"
          disabled={currentPage === data.totalPages || loading}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
