import React from 'react';
import ReactDOM from 'react-dom';
import { customElement, inject, bindable, noView } from 'aurelia-framework';

import { RedocStandalone } from 'redoc';


import ReactElement from "aurelia-react-element";


//<RedocStandalone specUrl="url/to/your/spec"/>

export class ApiDoc extends ReactElement {
    @bindable props = {};
    //props = { message: "Hello from Aurelia!" };
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



// @noView()
// @inject(Element)
// @bindable('url')
// @customElement('react-element')
// export class ReactElement2 {

//     reactComponent = {};

//     constructor(element) {
//         this.element = element;
//     }

//     render() {
//         this.reactComponent = ReactDOM.render(
//             <RedocStandalone specUrl={this.url} />,
//             this.element
//         );
//     }

//     bind() {

//         this.render();
//     }

//     /**
//      * Data Changed
//      * 
//      * An automatic callback function when our "data"
//      * bindable value changes. We need to rebind the React
//      * element to get the new data from the ViewModel.
//      * 
//      * @param {any} newVal The updated data
//      * @returns {void}
//      * 
//      */
//     dataChanged(newVal) {
//         this.bind();
//     }

// }