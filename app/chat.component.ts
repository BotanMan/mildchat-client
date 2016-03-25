import {ChatService, Message} from './chat.service';
import {Component} from 'angular2/core';
import {Subject} from 'rxjs/Rx'

@Component({
    selector: 'chat',
    template: `
        <div class="wrapper">
            <div class="messages">
                <p *ngFor="#msg of messages">{{ msg.message }}</p>
            </div>
        </div>
    `,
    directives: [],
    providers: [ChatService]
})
export class Chat {
    private messages: Message[] = new Array();

    constructor(private chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }
}
