import {Injectable} from 'angular2/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketService, Message} from './websocket.service';

const CHAT_URL = 'ws://localhost:8080/chat';

@Injectable()
export class ChatService {
	public messages: Subject<Message>;

	constructor(wsService: WebSocketService) {
		this.messages = wsService.connect(CHAT_URL);
	}
}
