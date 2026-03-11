import api from './config';
import { Event, PaginatedResponse, EventsQueryParams, RegistrationRequest } from '../types';

export const fetchEvents = async (params: EventsQueryParams): Promise<PaginatedResponse<Event>> => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v !== '' && v !== undefined && v !== null)
  );
  const { data } = await api.get<PaginatedResponse<Event>>('/events', { params: filteredParams });
  return data;
};

export const fetchEventById = async (id: number): Promise<Event> => {
  const { data } = await api.get<Event>(`/events/${id}`);
  return data;
};

export const registerToEvent = async (id: number, registrationData: RegistrationRequest) => {
  const { data } = await api.post(`/events/${id}/register`, registrationData);
  return data;
};
