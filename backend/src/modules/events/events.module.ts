import { Module } from "@nestjs/common";
import { EventsController } from "./presentation/controllers/events.controller";
import { EventService } from "./services/events.service";
import { RegistrationModule } from "../registration/registration.module";

@Module({
    imports: [RegistrationModule],
    controllers: [EventsController],
    providers: [EventService],
    exports: [EventService],
})
export class EventModule {}