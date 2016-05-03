import {bootstrap}         from 'angular2/platform/browser';

// Add all operators to Observable
import 'rxjs/Rx';

import {WikiComponent}        from './wiki/wiki.component';
import {WikiSmartComponent} from './wiki/wiki-smart.component';

bootstrap(WikiComponent);
bootstrap(WikiSmartComponent);
