import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import TipoMaterialDTO from './tipo-material.dto';
import { TipoMaterial } from './tipo-material.entity';
import { TipoMaterialService } from './tipo-material.service';

@Controller('tipo-material')
export class TipoMaterialController {
    constructor(private tipoMaterialService : TipoMaterialService){}

    @Get()
    public getAll(): Promise<TipoMaterial[]> {
        return this.tipoMaterialService.getAll();
    }
    @Get(":id")
    public getByID(@Param("id") id: number): Promise<TipoMaterial> {
        return this.tipoMaterialService.getByID(id);
    }
    // ENDPOINT USADO PARA TRAERME TODOS LOS TIPOS DE MATERIALES DE UN NOMBRE
    @Get("all/:nombre")
    public getByNombreRelaciones(@Param("nombre") nombre: string): Promise<TipoMaterial[]> {
        return this.tipoMaterialService.getByNombreRelaciones(nombre);
    }
    // ENDPOINT USADO PARA TRAERME  UN TIPO DE MATERIAL POR NOMBRE
    @Get("all/tipoMaterial/:nombre")
    public getByNombre(@Param("nombre") nombre: string): Promise<TipoMaterial> {
        return this.tipoMaterialService.getByNombre(nombre);
    }
    @Post()
    public addTipoMaterial(@Body() tipoMaterial: TipoMaterialDTO): Promise<TipoMaterial> {
        return this.tipoMaterialService.addTipoMaterial(tipoMaterial);
    }
    @Put(":id")
    public updateTipoMaterial(@Param("id") id: number, @Body() tipoMaterial: TipoMaterialDTO  ): Promise<boolean> {
        return this.tipoMaterialService.updateTipoMaterial(id,tipoMaterial);
    }
    @Delete(":id")
    public deleteTipoMaterial(@Param("id") id: number): Promise<boolean> {
        return this.tipoMaterialService.deleteTipoMaterial(id);
    }
}
