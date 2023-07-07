import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar){}

  ngOnInit(): void {
    
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('Ingrese su nombre de usuario !!','Aceptar',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      })
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe (
      (data) => {
        console.log(data);
        Swal.fire('Usuario Guardado','Usuario registrado exitosamente', 'success')
      }, (error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error !!','Aceptar',{
          duration: 3000,
        })
      }
    )
  }

}


