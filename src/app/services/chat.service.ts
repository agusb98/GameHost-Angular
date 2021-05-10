import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private bd: AngularFirestore, private toastr: ToastrService) { }

    public async createOne(message: Message, pathOfCollection: string) {
        try {
            const result = await this.bd.collection(pathOfCollection).add({ ...message });  //  llaves es objeto, 3 puntitos es dinamico
            return result;
        }
        catch (error) { this.toastr.error('Error at the moment to send..', 'Status Message'); }
        return;
    }

    getAllByGame(game: string) {
        switch (game) {
            case 'ticTacToe': {
                return this.bd.collection<Message>('chat-ticTacToe', ref => ref.orderBy('time', 'asc'));
            }
            case 'piedraPapelTijera': {
                return this.bd.collection<Message>('chat-piedraPapelTijera', ref => ref.orderBy('time', 'asc'));
                break;
            }
            case 'memotest': {
                return this.bd.collection<Message>('chat-memotest', ref => ref.orderBy('time', 'asc'));
                break;
            }
            case 'simon': {
                return this.bd.collection<Message>('chat-simon', ref => ref.orderBy('time', 'asc'));
                break;
            }
            default:
                return this.bd.collection<Message>('chat', ref => ref.orderBy('time', 'asc'));
        }
    }
}