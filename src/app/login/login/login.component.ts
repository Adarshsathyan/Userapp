import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any = this.fb.group({
    full_name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    mobile: ['',[ Validators.required, Validators.pattern('[0-9]{10}')]],
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
     this.router.navigateByUrl('users')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid entries. Try again !',
      })
   }
    
  }

}
