import {Injectable} from 'angular2/core';
import {Observable, Observer, Subject} from 'rxjs/Rx';

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class WebSocketService {
	connect(url): Subject<Message> {
		let ws = new WebSocket(url);

		let observable = Observable.create((obs: Observer<Message>) => {
			ws.onmessage = obs.next.bind(obs);
			ws.onerror = obs.error.bind(obs);
			ws.onclose = obs.complete.bind(obs);

			return ws.close.bind(ws);
		});

		let observer = {
			next: (data: Message) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(data);
				}
			},
		};

		return Subject.create(observer, observable);
	}
}
