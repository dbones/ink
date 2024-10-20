import { customElement, inject } from 'aurelia-framework';
import { ApiCatalogService } from '../services/api-catalog-services';
//import 'redoc/bundles/redoc.standalone';

//declare let Redoc: any

@inject(ApiCatalogService)
@customElement("api")
export class Api {

    apiCatalogService: ApiCatalogService;
    url: string;

    constructor(apiCatalogService: ApiCatalogService) {
        this.apiCatalogService = apiCatalogService;
    }

    activate(params: any): Promise<any> {
        console.log(params);
        this.url = this.apiCatalogService.getUrl(params.id);
        console.log(this.url);
        //Redoc.init(this.url);

        //return new Promise(()=>{});
        return null;
      }
      
}