import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {

  constructor(private menu:MenuController,
    public dataLocal: DataLocalService) { }

  ngOnInit() {
  }
  verMenu(){
    this.menu.open('first');
  }
  abrirRegistro( registro){
    console.log('Registro', registro);
  }

}
