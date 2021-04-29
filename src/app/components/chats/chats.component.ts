import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  message: Message = new Message();
  chat: Observable<any[]>;
  email: any = localStorage.getItem('email');

  constructor(private chatService: ChatService) {
    this.chat = chatService.getAll().valueChanges();
  }

  send() {
    this.message.from = localStorage.getItem('email');

    if (this.checkMessage(this.message)) {
      this.chatService.createOne(this.message);
      this.clear();
    }
  }

  public checkMessage(message: Message): boolean {
    if (message.message.length > 0) {
      return true;
    }
    return false;
  }

  clear() {
    this.message.message = '';
  }
}