import { Controller, Get, Param, Query, ParseIntPipe, Post, Body, HttpCode } from '@nestjs/common';
import { EventService } from '../../services/events.service';
import { EventsQueryDto } from '../dto/request/events-query.dto';
import { EventResponseDto } from '../dto/response/event-response.dto';
import { PaginatedResponseDto } from '../../../../common/dto/response/paginated-response.dto';
import { RegisterToEventDto } from '../dto/request/register-to-event.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    async findAll(@Query() query: EventsQueryDto): Promise<PaginatedResponseDto<EventResponseDto>> {
        return this.eventService.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<EventResponseDto> {
        return this.eventService.findOne(id);
    }

    @Post(':id/register')
    @HttpCode(201)
    async registerToEvent(
        @Param('id') id: number,
        @Body() body: RegisterToEventDto,
    ) {
        await this.eventService.registerToEvent(id, body);
        
        return {
            success: true,
            message: 'Registration successful',
        };
    }
}