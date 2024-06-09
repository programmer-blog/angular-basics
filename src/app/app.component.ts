import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    UserProfileComponent,
    CommonModule,
    JokeComponent,
    AComponent,
    B1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {name:"", isSingle: true, salary: 2000}, 
    {name:"", isSingle: false, salary: 2500}, 
    {name:"", isSingle: false, salary: 1000}, 
  ]

  receivedData(e:User) {
    
    const userIndex = this.users.findIndex(user=>user.name == e.name)
    
    this.users[userIndex].salary = e.newSalary
  }

  clear() {
    this.users = []
  }
}
