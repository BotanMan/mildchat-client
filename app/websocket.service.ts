import Rx from 'rxjs/Rx';
import {Injectable} from 'angular2/core';

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class WebSocketService {
	connect(url): Rx.Subject<Message> {
		let ws = new WebSocket(url);

		let observable = Rx.Observable.create((obs: Rx.Observer<Message>) => {
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

		return Rx.Subject.create(observer, observable);
	}
}
