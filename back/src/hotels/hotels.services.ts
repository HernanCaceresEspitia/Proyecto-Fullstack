import { Injectable } from "@nestjs/common";
import { HotelsRepository } from "./hotels.repositories";
import { CreateHotelDto } from "./hotels.dtos";

@Injectable()
export class HotelsService{
    constructor(
        private readonly hotelsDbRepository: HotelsRepository
    ){}

    async getDbHotels(){
        return await this.hotelsDbRepository.getDbHotels();
    }

    async getDbHotelById(id: string){
        return await this.hotelsDbRepository.getDbHotelById(id);
    }

    async createDbHotel(hotelDto: CreateHotelDto){
        return await this.hotelsDbRepository.createDbHotel(hotelDto);
    }

    async searchHotels(query: string){
        return await this.hotelsDbRepository.searchHotels(query);
    }

    // async searchHotels(
    //     name?: string,
    //     country?: string,
    //     city?: string,
    //     service?: string,
    //     room?: string
    // ) {
    //     // Construye un objeto de filtro basado en los parámetros proporcionados
    //     const filter: any = {};
    //     if (name) filter.name = name;
    //     if (country) filter.country = country;
    //     if (city) filter.city = city;
    //     if (service) filter.service = service;
    //     if (room) filter.room = room;
    
    //     // Llama al método en el repositorio con el objeto de filtro
    //     return await this.hotelsDbRepository.searchHotels(filter);
    // }
    
    // async searchHotels(filter: any) {
    //     return await this.hotelsDbRepository.searchHotels(filter);
    //   }
    
    

}