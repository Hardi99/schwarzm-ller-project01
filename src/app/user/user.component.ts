import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string; */
  avatar = input.required<string>
  name = input.required<string>

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {}
}
