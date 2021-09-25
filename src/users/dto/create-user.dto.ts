import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почта пользователя'})
    readonly email: string;
    @ApiProperty({example: '614641619', description: 'Уникальный идентификатор'})
    readonly password: string;
}