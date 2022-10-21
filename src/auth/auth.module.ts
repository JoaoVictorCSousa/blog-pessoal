import { Module } from "@nestjs/common/decorators";
import { Bcrypt } from "./bcrypt/bcrypt";

@Module({
    imports: [],
    providers: [Bcrypt],
    controllers: [],
    exports: [Bcrypt]
})
export class AuthModule {}