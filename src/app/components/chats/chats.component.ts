import { Component } from '@angular/core';
import { Message } from 'src/app/models/message/message';
import { MessageFireService } from 'src/app/services/message/message-fire/message-fire.service';
import { MessageRealService } from 'src/app/services/message/message-real/message-real.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  public message: Message

  constructor(
    private messageFireService: MessageFireService,
    private messageRealService: MessageRealService
  ) {
    //TODO  guardar info del usuario que mando..
    this.message = new Message();
  }

  public send() {
    this.messageFireService.addOne(this.message);
    this.messageRealService.addOne(this.message);    
  }
}