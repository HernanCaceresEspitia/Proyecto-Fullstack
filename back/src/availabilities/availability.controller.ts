import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { AvailabilityService } from "./availability.service";
import { CreateAvailabilityDto, UpdateAvailabilityDto } from "./availability.dtos";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/auth/guards/roles.enum";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('RoomAvailability')
@Controller('availabilities')
export class AvailabilityController {
    constructor(private readonly availabilityService: AvailabilityService) { }

    @Get()
    @HttpCode(200)
    async getAllAvailabilities(
        @Query('page') page: string,
        @Query('limit') limit: string,
    ) {
        if (!page) page = '1';
        if (!limit) limit = '10';

        return await this.availabilityService.getAllAvailabilities(Number(page), Number(limit))
    }

    @Get('/roomtype/:id')
    @HttpCode(200)
    async getAvailabilitiesByRoomTypeId(@Param('id', ParseUUIDPipe) roomTypeId: string,
        @Query('page') page: string,
        @Query('limit') limit: string,
    ) {
        if (!page) page = '1';
        if (!limit) limit = '10';
        return await this.availabilityService.getAvailabilitiesByRoomTypeId(roomTypeId, Number(page), Number(limit))
    }

    @ApiBearerAuth()
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Post()
    @HttpCode(201)
    async createRoomAvailability(@Body() createAvailabilityData: CreateAvailabilityDto) {
        const { roomId, startDate, endDate } = createAvailabilityData
        return await this.availabilityService.createRoomAvailability(roomId, startDate, endDate)
    }

    @ApiBearerAuth()
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Put(':id')
    @HttpCode(200)
    async updateAvailability(@Param('id', ParseUUIDPipe) id: string, @Body() updateAvailabilityData: UpdateAvailabilityDto) {
        return await this.availabilityService.updateAvailability(id, updateAvailabilityData)
    }

    @ApiBearerAuth()
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    @Delete(':id')
    @HttpCode(200)
    async deleteRoomAvailability(@Param('id', ParseUUIDPipe) id: string) {
        return await this.availabilityService.deleteRoomAvailability(id)
    }
}