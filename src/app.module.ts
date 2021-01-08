import { Module } from '@nestjs/common';
import { ApplicationModule } from "./application/application.module";
import { ControllerModule } from "./controller/controller.module";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";

@Module({
  imports: [
    ApplicationModule,
    ControllerModule,
    InfrastructureModule
  ],
})
export class AppModule {}
