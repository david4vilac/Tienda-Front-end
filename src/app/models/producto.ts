export class Producto {
    id?: number;
    nombre?: string;
    precio?: number; 
    image?: string;

    constructor(nombre: string, precio: number, image: string) {
        this.nombre = nombre || '';
        this.precio = precio || 0;
        this.image = image || 'https://image.api.playstation.com/vulcan/img/rnd/202011/1020/FKgazVvG7BcWouCr39mIiXkW.png';
    }
}
