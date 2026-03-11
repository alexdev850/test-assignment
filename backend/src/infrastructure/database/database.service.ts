import { Injectable } from '@nestjs/common';
import { Event } from '../../modules/events/domain/event.entity';

@Injectable()
export class DatabaseService {
  private events: Event[] = [
    {
      id: 1,
      title: 'Tech Conference 2026',
      date: '2026-03-15T10:00:00Z',
      location: 'Kyiv, Ukraine',
      shortDescription: 'A conference about future technologies.',
      description: 'Join us for a deep dive into AI, Web3, and futuristic hardware.',
    },
    {
      id: 2,
      title: 'Art Exhibition',
      date: '2026-04-20T12:00:00Z',
      location: 'Lviv, Ukraine',
      shortDescription: 'Contemporary art by local artists.',
      description: 'Experience the vibrant art scene of Lviv.',
    },
    {
        id: 3,
        title: 'Networking Brunch',
        date: '2026-05-10T09:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'Connect with professionals in your field.',
        description: 'Casual networking event for business professionals.',
    },
    {
        id: 4,
        title: 'Team building',
        date: '2026-06-12T14:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'Connect with professionals in your field.',
        description: 'Outdoor team activities.',
    },
    {
        id: 5,
        title: 'event out 55',
        date: '2026-07-01T18:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'Summer evening event.',
        description: 'Music and drinks.',
    },
    {
        id: 6,
        title: 'Aaartt',
        date: '2026-07-25T11:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'More art here.',
        description: 'Exhibition of young talents.',
    },
    {
        id: 7,
        title: 'some new event',
        date: '2026-08-14T10:00:00Z', 
        location: 'Odessa, Ukraine',
        shortDescription: 'Unknown vibes.',
        description: 'Something interesting happens here.',
    },
    {
        id: 8,
        title: 'Some event',
        date: '2026-09-05T15:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'Autumn meetup.',
        description: 'Discussing goals for Q4.',
    },
    {
        id: 9,
        title: 'event9999999',
        date: '2026-10-10T09:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'Legacy event.',
        description: 'Stable and old-school.',
    },
    {
        id: 10,
        title: 'event 10',
        date: '2026-11-20T13:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'Pre-winter party.',
        description: 'Warm atmosphere in cold weather.',
    },
    {
        id: 11,
        title: 'eevent11',
        date: '2026-12-31T21:00:00Z',
        location: 'Odessa, Ukraine',
        shortDescription: 'New Year Bash.',
        description: 'Celebrate the end of 2026.',
    },
  ];

  getEvents() {
    return this.events;
  }

  getEventById(id: number) {
    return this.events.find(e => e.id === id);
  }
}