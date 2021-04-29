import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private ruthOfCollection = "/chat";
    /* private referenceSorted: AngularFirestoreCollection<Message>; */
    private referenceToCollection: AngularFirestoreCollection<Message>;

    constructor(private bd: AngularFirestore, private toastr: ToastrService) {
        this.referenceToCollection = bd.collection(this.ruthOfCollection);
        /* this.referenceSorted = bd.collection<Message>('chat', ref => ref.orderBy('score', 'desc')); */
    }

    public async createOne(message: Message) {
        try {
            const result = await this.referenceToCollection.add({ ...message });  //  llaves es objeto, 3 puntitos es dinamico
            return result;
        }
        catch (error) { this.toastr.error('Error at the moment to send..', 'Status Message'); }
        return;
    }

    getAll(): AngularFirestoreCollection<Message> {
        return this.bd.collection<Message>('chat', ref => ref.orderBy('time', 'asc'));
    }

    filterByGame(game: string){
        var list = this.getAll();
    }
}