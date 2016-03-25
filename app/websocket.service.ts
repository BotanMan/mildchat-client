import Rx from 'rxjs/Rx';
import {Injectable} from 'angular2/core';

export interface Message {
	author: string;
	message: string;
}

@Injectable()
export class WebSocketService {
	private subject: Rx.Subject<Message>;

	public connect(url): Rx.Subject<Message> {
		if(!this.subject) {
			this.subject = this.create(url);
		}

		return this.subject;
	}

	private create(url): Rx.Subject<Message> {
		let ws = new WebSocket(url);

		let observable = Rx.Observable.create((obs: Rx.Observer<Message>) => {
			ws.onmessage = (evt: MessageEvent) => obs.next(this.transformResponse(evt));
			ws.onerror = obs.error.bind(obs);
			ws.onclose = obs.complete.bind(obs);

			return ws.close.bind(ws);
		});

		let observer = {
			next: (data: Message) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			},
		};

		return Rx.Subject.create(observer, observable);
	}

	private transformResponse(response: MessageEvent): Message {
		let data = JSON.parse(response.data);

		let message = {
			author: data.author,
			message: data.message,
		}

		return message;
	}
}
