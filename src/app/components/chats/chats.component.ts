import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  @Input() chatName: string;

  chat: Observable<Message[]>;
  message: Message = new Message();
  email: any = localStorage.getItem('email');

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chat = this.chatService.getAllByGame(this.chatName).valueChanges();
  }

  send() {
    this.message.from = this.email;
    this.message.game = this.chatName;

    if (this.checkMessage(this.message)) {
      this.chatService.createOne(this.message, 'chat-' + this.chatName);
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