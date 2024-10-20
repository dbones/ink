import { inject, singleton } from 'aurelia-framework';
import { AureliaConfiguration } from 'aurelia-configuration';
import * as yaml from 'js-yaml';
import { HttpClient } from 'aurelia-fetch-client';

@singleton()
@inject(AureliaConfiguration)
export class ApiCatalogService {

  apiMetas: Meta[] = [];
  idCounter: number = 0;


  constructor(configuration: AureliaConfiguration) {
    let urls: string[] = configuration.get('services');

    urls.forEach((entry) => { this.getOpenApi(entry); });

  }

  getOpenApi(url: string) {
    console.log(url);
    let httpClient = new HttpClient();
    httpClient
      .fetch(url)
      .then(response => response.body.getReader().read())
      .then(data => {
        var string = new TextDecoder("utf-8").decode(data.value);
        this.parseOpenApi(string, url);
        //console.log(string);
      });
  }


  parseOpenApi(openApiPayload: string, url: string) {
    let doc = yaml.safeLoad(openApiPayload);

    this.idCounter ++;
    let info = doc.info;
    let meta = <Meta>{
      id: this.idCounter.toString(),
      title: info.title,
      logo: (info['x-logo'] || {}).url,
      version: info.version,
      spec: url,
      description: this.trimByWord(info.description, 15)

    }

    this.apiMetas.push(meta);
  }


  trimByWord(sentence: string, num: number) {
    var result = sentence;
    var resultArray = result.split(" ");
    if (resultArray.length > num) {
      resultArray = resultArray.slice(0, num);
      result = resultArray.join(" ") + "...";
    }
    return result;
  }

  getUrl(id: string): string {
    for (let index = 0; index < this.apiMetas.length; index++) {
      const apiMeta = this.apiMetas[index];
      if(apiMeta.id == id) return apiMeta.spec;
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