
import { customElement, inject } from 'aurelia-framework';
import { ApiCatalogService } from '../services/api-catalog-services';
import { Router } from 'aurelia-router';

@inject(ApiCatalogService, Router)
@customElement("api-catalog")
export class ApiCatalog {

    apiCatalogService:ApiCatalogService;
    router: Router

    constructor(apiCatalogService: ApiCatalogService, router: Router) {
        this.apiCatalogService = apiCatalogService;
        this.router = router;
    }

    select(meta) {
        this.router.navigateToRoute('api', { id: meta.id });
    }

}
