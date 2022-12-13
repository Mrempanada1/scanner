import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];

  constructor(private storage: Storage) { 
    //'cargar los registros'
    this.cargarStorage();
  }

  async cargarStorage(){
    this.guardados = (await this.storage.get('registros')) || [];
  }

  guardarRegistro( format: string, text: string) {
    
    const nuevoRegistro = new Registro( format, text);
    this.guardados.unshift( nuevoRegistro );

    console.log(this.guardados);
    //'registros'
    this.storage.set('registros', this.guardados);
  }
}