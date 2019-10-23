import { bindable } from 'aurelia-framework';
import { RedocStandalone } from 'redoc';
import ReactElement from "aurelia-react-element";

//<RedocStandalone specUrl="url/to/your/spec"/>

export class ApiDoc extends ReactElement {
    @bindable props = {};
    component: any = RedocStandalone;

    @bindable url: string; //= 'http://redocly.github.io/redoc/openapi.yaml';

    bind() {
        this.syncProps();
    }

    syncProps() {
        console.log('loading docs');
        console.log(this.url);
        this.component.specUrl = this.url;
        this.props = { specUrl: this.url };
    }

    specUrlChanged() {
        this.syncProps();
    }


}