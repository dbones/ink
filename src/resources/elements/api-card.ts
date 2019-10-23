import {bindable, customElement} from 'aurelia-framework';

@customElement("api-card")
export class ApiCard {

    @bindable private meta: Meta;

    bind() {
        if(this.meta == null) {
            this.meta = <Meta>{
                description: "unable to load api correctly",
                logo: "/api-image.png",
                title: "Failed to Load",
                version : "0.0.0",
                spec: null
            }
            return;
        }

        if(!this.meta.logo) {
            this.meta.logo = "/api-image.png";
        }
    }


}

 interface Meta {
    id: string;
    title: string;
    logo: string;
    version: string;
    description: string;
    spec: string;
}