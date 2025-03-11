import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { Role } from "../../../constants/role.enum";
import { StatusEnum } from "../../../constants/status.enum";

export class UpdateUserDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(Role)
    role?: Role;

    @ApiPropertyOptional()
    @IsOptional()
    @IsEnum(StatusEnum)
    status?: StatusEnum;
}