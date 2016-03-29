import {ChatService} from './chat.service'
import {Chat} from './chat.component';
import {Component} from 'angular2/core';
import {CreateMessage} from './create-message.component';
import {Navbar} from './navbar.component';
import {WebSocketService} from './websocket.service';

@Component({
    selector: 'app',
    template: `
        <div class="wrapper">
            <navbar></navbar>
            <chat></chat>
            <create-message></create-message>
        </div>
    `,
    directives: [Navbar, Chat, CreateMessage],
    providers: [ChatService, WebSocketService],
})

export class AppComponent {}
