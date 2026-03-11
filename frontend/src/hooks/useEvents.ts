import { useState, useEffect, useCallback } from 'react';
import { fetchEvents, fetchEventById } from '../api/events';
import { Event, PaginatedResponse, EventsQueryParams } from '../types';

export const useEvents = (initialParams: EventsQueryParams = { page: 1, limit: 10 }) => {
  const [data, setData] = useState<PaginatedResponse<Event> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<EventsQueryParams>(initialParams);

  const loadEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchEvents(params);
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch events');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return { data, loading, error, params, setParams, refresh: loadEvents };
};

export const useEvent = (id: number) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchEventById(id);
        setEvent(result);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch event');
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  return { event, loading, error };
};
