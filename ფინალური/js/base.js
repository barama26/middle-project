export class Base 
{
    constructor() {}
    _setContent(id, value) 
        { let elem = document.getElementById(id);
            elem.innerHTML = value; }
}