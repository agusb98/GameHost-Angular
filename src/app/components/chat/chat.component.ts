import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message/message';
import { MessageFireService } from './../../services/message/message-fire.service';
import { MessageRealService } from './../../services/message/message-real.service';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: Message;

  constructor(private MyService: MessageFireService, private MyRealService: MessageRealService, 
    private MyServiceUser: UserService) { 
      this.message = new Message(); 
    }

  Send() {
    this.message.user = this.MyServiceUser.vigentUser;
    this.MyService.Create(this.message).then(() => {
      console.log('se envio el msj FIRE');
    });
    
    this.MyRealService.CreateOne(this.message).then(() => {
      console.log('se envio el msj REAL');
    });
  }

  ngOnInit(): void {
  }
}
