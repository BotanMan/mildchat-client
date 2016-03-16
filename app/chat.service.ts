import {Injectable} from 'angular2/core';
import {Observable, Subject} from 'rxjs/Rx';

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class ChatService {

	public chat: Subject<Message>;

	connect(url): void {
		this.chat = Observable.webSocket({
			url: url
		});
	}
}
