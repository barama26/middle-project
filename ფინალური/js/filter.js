import {params, cityParam, districtParam, typeParam , priceParam} from "./common.js";
import {soloUrl} from "./config.js";
import {Content} from "./content.js";

export function deleteSpaces(text)
{
    let result = '';
        for(let i=0; i<text.length; i++)
            {if(text[i] === ' ')
                {result = result + '+';}
            else
                {result = result + text[i];}
            }
        return result;
}

export function getUrl(link, value)
{
    let res = link;
        if(value === null)
            {res = res+'skip='+params[0]+'&limit='+params[1];}
        else
            {res = res + value +'&skip='+params[0]+'&limit='+params[1];}
        return res;
}

export function getPriceFrom(text)
{
    let result = '';
        for(let i=0; i<text.length; i++)
            {if(text[i] === ' ')
            { break }
            result = result + text[i];}
        return result;
}

export function getPriceTo(text)
{
    let result = '';
        for(let i=0; i<text.length; i++)
            {if(text[i] === '-')
                {for(let j = i+1; j<text.length; j++)
                    {if(text[j] !== ' ')
                    {result = result + text[j];}
                    }
                }
            }
    return result;
}

export function getFilters (arr, className)
{
    let filterItem = document.getElementsByClassName(className);
    allMarked(filterItem, className);
        for (let i = 1; i < filterItem.length; i++)
                {let filterElement = filterItem[i];
                 let searchValue = filterElement.value;
                    filterElement.addEventListener('click', () => 
                    {filterItem[0].checked = false;
                        if(filterElement.checked === true)
                            {arr.push(searchValue);}
                        else
                        {for(let j=0; j<arr.length; j++)
                            {if(arr[j] === searchValue)
                                {arr.splice(j,1)}
                            }
                        }
                    getContent(getUrl(soloUrl, getMarkedValues()));
                    })
                }
}

export function getContent(link)
{
    fetch(link)
    .then((res) => {return res.json();})

    .then((res)=>
    {let content = new Content(res);
     content._render();});
}



export function getMarkedValues()
{
    let cities = '';
    let distr = '';
    let types = '';
    let priceFrom = '?fromParam=';
    let PriceTo = '&toParam=';


    if(districtParam.length>0)
        {distr = '&districtParam=';
            for(let i=0; i<districtParam.length; i++)
            {if(i !== districtParam.length-1)
                {distr += deleteSpaces(districtParam[i])+'%2C';}
            else 
                {distr += deleteSpaces(districtParam[i])+'&';}
            }
        }

    if(cityParam.length>0)
        {cities = '&cityParam='
            for(let i = 0 ; i<cityParam.length; i++)
            {if(i !== cityParam.length-1)
                {cities += deleteSpaces(cityParam[i])+'%2C';}
            else 
                {cities += deleteSpaces(cityParam[i])+'&';}
            }
        }
    
    if(priceParam.length>0)
        {for(let i=0; i<priceParam.length; i++)
            {priceFrom += getPriceFrom(priceParam[i]);
             PriceTo += getPriceTo(priceParam[i]);}
        }

    if(typeParam.length>0)
        {types = '&typeParam=';
            for(let i=0; i<typeParam.length; i++)
                {if(i !== typeParam.length-1)
                    {types += deleteSpaces(typeParam[i])+'%2C';}
            else 
                {types += deleteSpaces(typeParam[i]);}
                }
        }

    let sum = priceFrom+PriceTo+cities+distr+types;
    return sum;
}

export function allMarked( arr, className)
{
    if (className !== 'price')
        {arr[0].addEventListener('click', () =>
            {for(let i=0; i<arr.length;i++)
                {if(arr[0].checked === true)
                    {arr[i].checked = true;}
                else
                    {arr[i].checked = false;}
                }
            })
        }
    else
        {arr[0].checked = true;}
}