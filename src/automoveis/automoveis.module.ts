import { Module } from "@nestjs/common";
import { AutomoveisService } from "./automoveis.service";
import { AutomoveisController } from "./automoveis.controller";

@Module ({
    imports: [],
    providers: [AutomoveisService],
    controllers: [AutomoveisController]
})
export class AutomoveisModule {}