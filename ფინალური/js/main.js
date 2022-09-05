import {app,params, cityParam, districtParam, typeParam, priceParam} from "./common.js";
import {soloUrl} from "./config.js";
import {Content} from "./content.js";
import { getContent, getUrl, getFilters } from "./filter.js";
import {Devs} from "./developers.js";

let topMenu = new Devs(app);
let headerMenu = topMenu._render();

getContent(getUrl(soloUrl, null));
getFilters(cityParam, 'country');
getFilters(districtParam, 'district');
getFilters(typeParam, 'status');
getFilters(priceParam, 'price');
