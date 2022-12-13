import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from '../../../interfaces/usuario';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registrado:Usuario=null;

  usuario:Usuario={
    username:'',
    password:'',
    correo:''
  }
  constructor(private storage:Storage, private router:Router, public toastController: ToastController  ) { }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log(this.usuario);
    this.login();
  }

  async login(){
    this.registrado =await this.storage.get(this.usuario.username);
    if (this.registrado!=null)
    {
      if(this.usuario.username==this.registrado.username && this.usuario.password==this.registrado.password)
      {
        console.log("Iniciando");
        await this.storage.set('session',this.registrado.username);
        this.router.navigate(['/home']);
      }
      else{
        console.log("Usuario no existe");
      }
    }
    else{
      console.log("No esta registrado");
    }
  }

}
