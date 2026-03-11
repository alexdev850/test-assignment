import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bullmq";
import { RegistrationService } from "./services/registration.service";
import { RegistrationProcessor } from "./processors/registration.processor";

@Module({
    imports: [BullModule.registerQueue({
        name: "registration"
    })],
    providers: [RegistrationService, RegistrationProcessor],
    exports: [RegistrationService],
})
export class RegistrationModule {}