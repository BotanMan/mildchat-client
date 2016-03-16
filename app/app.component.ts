import {Component} from 'angular2/core';
import {Navbar} from './navbar.component';
import {Chat} from './chat.component';
import {CreateMessage} from './create-message.component';
import {ChatService} from './chat.service'

@Component({
    selector: 'app',
    template: `
        <navbar></navbar>
        <chat></chat>
        <create-message></create-message>
    `,
    directives: [Navbar, Chat, CreateMessage],
    providers: [ChatService],
})

export class AppComponent {}
