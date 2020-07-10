import {
	Injectable,
	NgZone
} from '@angular/core';

import {IPostMessageBridge} from './IPostMessageBridge';
import {PostMessageBridgeImpl} from './PostMessageBridgeImpl';

@Injectable()
export class PostMessageBridgeFactory {

	constructor(private ngZone: NgZone) {
	}

	public makeInstance(): IPostMessageBridge {
		return new PostMessageBridgeImpl(this.ngZone);
	}
}
