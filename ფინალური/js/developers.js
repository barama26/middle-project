import { Base } from "./base.js";


export class Devs extends Base 
{
    constructor(appJson) 
        { super();
        this.appJson = appJson; }

    _getStatus()
    { return this.appJson.status.map((obj) => 
        {return `<input class="status" type="checkbox" value="${obj.title}"><span>${obj.title}</span><br>`}) .join(" "); }

    _getDistrict()
    { return this.appJson.district.map((obj) => 
        {return `<input class="district" type="checkbox" value="${obj.title}"><span>${obj.title}</span><br>`}) .join(" "); }
            
    _getCountries()
    { return this.appJson.countries.map((obj) => 
        {return `<input class="country" type="checkbox" value="${obj.title}"><span>${obj.title}</span><br>`}) .join(" "); }

    _getSquare()
    { return this.appJson.square.map((obj) => 
        {return `<input type="radio" class="price" value="${obj.title}"><span>${obj.title}</span><br>`}) .join(" "); }

    _render() 
    {
        this._setContent('countries', this._getCountries());
        this._setContent('district', this._getDistrict());
        this._setContent('square', this._getSquare());
        this._setContent('status', this._getStatus());
    }
}