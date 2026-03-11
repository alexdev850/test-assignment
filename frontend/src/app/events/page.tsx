'use client';

import { useEvents } from '@/hooks/useEvents';
import { useDebounce } from '@/hooks/useDebounce';
import { EventFilters } from '@/components/events/EventFilters';
import { EventList } from '@/components/events/EventList';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const { data, loading, error, params, setParams } = useEvents({
    page: 1,
    limit: 6,
  });

  useEffect(() => {
    setParams(prev => ({
      ...prev,
      search: debouncedSearch,
      dateFrom: dateFrom || undefined,
      dateTo: dateTo || undefined,
      page: 1
    }));
  }, [debouncedSearch, dateFrom, dateTo, setParams]);

  const setPage = (page: number) => {
    setParams(prev => ({ ...prev, page }));
  };

  if (error) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-muted-foreground mt-2">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">Try Again</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Events</h1>

      <EventFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        dateFrom={dateFrom}
        setDateFrom={setDateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
      />

      <EventList
        data={data}
        loading={loading}
        currentPage={params.page || 1}
        onPageChange={setPage}
      />
    </div>
  );
}
