import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.service";


@ApiTags('Usuario')
@Controller ('/auth')
export class AuthController {
    constructor (private authService: AuthService){}

   
    
    @HttpCode(HttpStatus.OK)
    @Post ('/logar')
    async login  (@Body() user: UsuarioLogin): Promise<any> {
    return this.authService.login(user)
}
}