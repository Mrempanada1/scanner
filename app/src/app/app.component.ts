import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    http: HttpClient,
    private storage:Storage,
    private menu:MenuController,
    private st:Storage
    ) {}
  async ngOnInit() {
    await this.storage.create();
  }
  cerrarMenu()
  {
    this.menu.close('first');
  }
  async cerrar()
  {
    await this.st.set('sesion',null);
  }

}
