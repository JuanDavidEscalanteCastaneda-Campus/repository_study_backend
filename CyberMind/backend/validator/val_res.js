var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsPositive, IsNotEmpty, MaxLength, Matches, IsEmpty, IsUrl } from 'class-validator';
export class val_res {
    constructor(id, tipo, url, id_tema) {
        this.id = id;
        this.tipo = tipo;
        this.url = url;
        this.id_tema = id_tema;
    }
}
__decorate([
    Expose({ name: "id" }),
    IsEmpty({ message: () => { throw { status: 400, message: 'El parametro id no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_res.prototype, "id", void 0);
__decorate([
    Expose({ name: "tipo" }),
    MaxLength(50, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro tipo solo acepta un numero maximo de 100 caracteres' }; } }),
    Matches(/^[A-Za-z\s]+$/, { message: () => { throw { status: 400, message: 'el parametro tipo debe ser una cadena de texto sin caracteres especiales' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro tipo no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro tipo es obligatorio' }; } }),
    __metadata("design:type", String)
], val_res.prototype, "tipo", void 0);
__decorate([
    Expose({ name: "url" }),
    MaxLength(250, { message: () => { throw { status: 400, message: 'lo sentimos,el parametro url solo se puede ingresar un numero maximo de 250 caracteres' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'el parametro url no puede estar vacio' }; } }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro url es obligatorio' }; } }),
    IsUrl(undefined, { message: () => { throw { status: 400, message: 'el parametro url debe ser una url valida' }; } }),
    __metadata("design:type", String)
], val_res.prototype, "url", void 0);
__decorate([
    Expose({ name: "id_tema" }),
    IsDefined({ message: () => { throw { status: 400, message: 'el parametro id_tema es obligatorio' }; } }),
    IsPositive({ message: () => { throw { status: 400, message: 'el parametro id_tema debe ser positivo' }; } }),
    IsNumber({}, { message: () => { throw { status: 400, message: 'El parametro id_tema debe ser un numero' }; } }),
    IsNotEmpty({ message: () => { throw { status: 400, message: 'El parametro id_tema no puede estar vacio' }; } }),
    __metadata("design:type", Number)
], val_res.prototype, "id_tema", void 0);
