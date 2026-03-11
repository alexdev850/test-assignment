import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job } from "bullmq";

@Processor("registration")
export class RegistrationProcessor extends WorkerHost {

    private readonly logger = new Logger(RegistrationProcessor.name);

    async process(job: Job) {

        const { data } = job;

        this.logger.log('processing event...', JSON.stringify(data, null, 2))
    }
}