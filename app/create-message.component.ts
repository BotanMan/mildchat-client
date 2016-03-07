import {Component} from 'angular2/core';

@Component({
    selector: 'create-message',
    template: `
        <div class="input-group col-xs-8">
            <input type="text" class="form-control" placeholder="message...">
            <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">send</button>
            </span>
        </div>
    `,
    directives: [],
})

export class CreateMessage {}
