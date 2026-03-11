export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  shortDescription: string;
  description: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface EventsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface RegistrationRequest {
  fullName: string;
  email: string;
  phone: string;
}
