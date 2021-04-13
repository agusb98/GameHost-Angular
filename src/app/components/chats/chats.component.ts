import { Component } from '@angular/core';
import { Message } from 'src/app/models/message/message';
import { MessageFireService } from 'src/app/services/message/message-fire/message-fire.service';
import { MessageRealService } from 'src/app/services/message/message-real/message-real.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  public message: Message

  constructor(
    private messageFireService: MessageFireService,
    private messageRealService: MessageRealService,
    private userService: UserService
  ) {
    this.message = new Message();
    this.message.from = this.userService.selectedUser.email;
  }

  public send() {
    this.messageFireService.addOne(this.message).then(() => {
      console.log("Se Envio el message");
    });

    this.messageRealService.addOne(this.message).then(() => {
      console.log("Se Envio el real");
    });
  }
}