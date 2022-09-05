import { Base } from "./base.js";

export class Content extends Base {

constructor(appJson) 
{ super();
    this.appJson = appJson; }
    
_getTotal()
{ return `<h4>დეველოპერები (${this.appJson.data.total})</h4>` }

_getContent()
{ return this.appJson.data.items.map((obj) => {
            return `<div class="selection-item">
            <img src="./imgs/koxta.JPG" />
            <div class="selection-text">
            <span class="text-title">${obj.developer}</span><br><br>
            <span class="text-offer">${obj.priceLabel}</span><br>
            <span class="text-desc">${obj.address}</span><br><br>
            <a class="link" href="#">გაიგეთ მეტი</a>
            </div>
        </div>`
    })
    .join(" "); }

_render() 
{ this._setContent('selectionItems', this._getContent());
  this._setContent('selectionTitle', this._getTotal()); }

}