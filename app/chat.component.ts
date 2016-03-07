import {Component} from 'angular2/core';

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

}
