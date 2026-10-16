import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
