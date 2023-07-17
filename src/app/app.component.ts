import { Component } from '@angular/core';
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';
import { MainService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = new Array<any>();
  user5: any;
  post = new Array<any>();
  albums = new Array<any>();
  title = 'angular-test-nttumvel';
  set = new Set();
  idList: any;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getUsers().subscribe((response) => {
      this.users = response;
      this.user5 = this.users.filter((user) => {
        return user.id === 5;
      });
      console.log('Informacion del usuario 5', this.user5);
    });
    this.mainService.getPosts().subscribe((resp) => {
      this.post = resp;
      let numberPost = this.post.filter((post) => (post.userId = 5));
      console.log('Numero de post del usuario 5:', numberPost.length);
    });
    this.mainService.getAlbums().subscribe((response) => {
      this.albums = response;
      this.albums.forEach((id) => {
        this.idList = id.userId;
        this.set.add(this.idList);
      });
      console.log('set', ...this.set.add(this.idList));
    });

    /**
     * !Ejercicio 1
     * @description Obtener del endpoint de usuarios, el usuario numero 5  y posteriormente obtener cuantos posts ha hecho dicho usuario
     */

    // Solucion Ejercicio 1

    /**
     * !Ejercicio 2
     * @description Utilizando el endpoint de albums, obtener cuantos usuarios distintos han añadido albumes
     */

    // Solucion Ejercicio 2
  }
}
