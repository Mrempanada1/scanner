import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  usuario: Usuario = {
    username: '',
    password: '',
    correo: ''
  }

  constructor(private storage: Storage, private router:Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.usuario)
    this.guardar()
  }
  async guardar(){
    console.log("guardar");
    
    let user=await this.storage.get(this.usuario.username)
    if(user!=null){
      await this.storage.set(this.usuario.password,this.usuario)
      console.log("Contraseña cambiada");
      this.router.navigate(['/login']);
    }
    else{
      console.log("Correo no existente")     
    }
  }
  async presentToast2(){
    const toast = await this.toastController.create({
      message: 'Contraseña cambiada',
      duration: 700,
      position: "bottom",
      color: "success"
    });
    toast.present()
  }
}
