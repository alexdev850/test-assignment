import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";
import { Registration } from "../domain/registration.entity";

@Injectable()
export class RegistrationService {
    constructor(@InjectQueue("registration") private readonly registrationQueue: Queue) {}

    async register(registration: Registration) {

        await this.registrationQueue.add("registration", registration, {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 1000,
            },
        });

        return {
            success: true,
            message: "Registration added to queue",
        }
    }
}