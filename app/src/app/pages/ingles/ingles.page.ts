import { DataLocalService } from './../../services/data-local.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.page.html',
  styleUrls: ['./ingles.page.scss'],
})
export class InglesPage implements OnInit {

  constructor(private menu:MenuController, public dataLocal: DataLocalService) { }

  ngOnInit() {
  }
  verMenu(){
    this.menu.open('first');
  }
  abrirRegistro( registro){
    console.log('Registro', registro);
  }

}
