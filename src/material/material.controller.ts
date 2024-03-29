import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/usuario/jwt.guard';
import MaterialDTO from './material.dto';
import { Material } from './material.entity';
import { MaterialService } from './material.service';

@Controller('material')
export class MaterialController {
    constructor(private materialService : MaterialService){}

    @Get()
    public getAll(): Promise<Material[]> {
        return this.materialService.getAll();
    }
    @UseGuards(JwtGuard)
    @Get(":id")
    public getByID(@Param("id") id: number): Promise<Material> {
        return this.materialService.getByID(id);
    }
    // ENDPOINT USADO PARA TRAERME TODOS LOS MATERIALES DE UN DETERMINADO TIPO DE MATERIAL
    @Get("tipo-material/:id")
    public getAllRelaciones(@Param("id") id: number): Promise<Material[]> {
        return this.materialService.getAllRelaciones(id)
    }
    @UseGuards(JwtGuard)
    @Post()
    public addMaterial(@Body() material: MaterialDTO): Promise<Material> {
        return this.materialService.addMaterial(material);
    }
    @UseGuards(JwtGuard)
    @Put(":id")
    public updateMaterial(@Param("id") id: number, @Body() material: MaterialDTO  ): Promise<boolean> {
        return this.materialService.updateMaterial(id,material);
    }
    @UseGuards(JwtGuard)
    @Delete(":id")
    public deleteMaterial(@Param("id") id: number): Promise<Material> {
        return this.materialService.deleteMaterial(id);
    }
}
