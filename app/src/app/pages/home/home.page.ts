import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private menu:MenuController,
    private st:Storage, 
    private rt:Router,
    public dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.cerrar();
    this.rt.navigate(['/login']);
  }
  async login()
  {
    await this.st.set('session',null);
  }

  verMenu(){
    this.menu.open('first');
  }

  async cerrar()
  {
    await this.st.set('sesion',null);
  }

  abrirRegistro( registro){
    console.log('Registro', registro);
  }

}
