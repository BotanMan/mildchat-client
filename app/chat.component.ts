import {ChatService} from './chat.service';
import {Component} from 'angular2/core';
import {Subject} from 'rxjs/Rx'

@Component({
    selector: 'chat',
    template: `
        <div class="wrapper">
            <div class="messages">
                <message></message>
            </div>
        </div>
    `,
    directives: [],
    providers: [ChatService]
})
export class Chat {
    private messages: string[];

    constructor(private chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            this.messages.push(msg.message);
        });
    }
}
