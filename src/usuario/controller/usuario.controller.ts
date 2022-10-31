import { HttpStatus, Body, Controller, Get, HttpCode, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";
 import { JwtAuthGuard } from "../../auth/guard/jwt.auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@ApiTags('Usuario')
@Controller('/usuarios')

export class UsuarioController {
    constructor (private readonly usuarioService: UsuarioService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll (): Promise<Usuario[]> {
        return this.usuarioService.findAll ();
    }

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create (@Body() usuario: Usuario): Promise<Usuario>{
    return await this.usuarioService.create(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update (@Body() usuario: Usuario): Promise<Usuario>{
    return this.usuarioService.update(usuario)
    }
}