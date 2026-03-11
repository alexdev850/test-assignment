import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../../../infrastructure/database/database.service";
import { EventsQueryDto } from "../presentation/dto/request/events-query.dto";
import { PaginatedResponseDto } from "../../../common/dto/response/paginated-response.dto";
import { EventResponseDto } from "../presentation/dto/response/event-response.dto";
import { RegistrationService } from "../../registration/services/registration.service";
import { RegisterToEventDto } from "../presentation/dto/request/register-to-event.dto";

@Injectable()
export class EventService {
    constructor(
        private readonly db: DatabaseService,
        private readonly registrationService: RegistrationService,
    ) {}

    async findAll(query: EventsQueryDto): Promise<PaginatedResponseDto<EventResponseDto>> {
        const { page = 1, limit = 10, search, dateFrom, dateTo } = query;
        let events = this.db.getEvents();

        if (search) {
            const lowerSearch = search.toLowerCase();
            events = events.filter(e => e.title.toLowerCase().includes(lowerSearch));
        }

        if (dateFrom) {
            const fromDate = new Date(dateFrom);
            events = events.filter(e => new Date(e.date) >= fromDate);
        }

        if (dateTo) {
            const toDate = new Date(dateTo);
            events = events.filter(e => new Date(e.date) <= toDate);
        }

        const total = events.length;
        const totalPages = Math.ceil(total / limit);
        const data = events.slice((page - 1) * limit, page * limit);

        return {
            data,
            total,
            page,
            limit,
            totalPages,
        };
    }

    async findOne(id: number): Promise<EventResponseDto> {
        const event = this.db.getEventById(id);
        if (!event) {
            throw new NotFoundException(`Event with id ${id} not found`);
        }
        return event;
    }

    async registerToEvent(eventId: number, data: RegisterToEventDto) {
        const event = this.db.getEventById(eventId);
        if (!event) {
            throw new NotFoundException(`Event with id ${eventId} not found`);
        }

        return await this.registrationService.register({
            ...data,
            eventId,
        });
    }
}