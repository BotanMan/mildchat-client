import {Component} from 'angular2/core';
import {ChatService} from './chat.service';

const CHAT_URL = 'http://localhost:8080/chat'

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
})
export class Chat {
    private messages: string[];

    constructor(private chatService: ChatService) {
        // chatService.connect(CHAT_URL);
        // chatService.chat.subscribe((message: Message) => {
        //     console.log(message);
        // })
    }
}
