/* jshint esversion: 6,-W097, -W040, browser: true, expr: true, undef: true */
/* from_functions *//* global fromDate */
/* to_functions *//* global toDate */
/* modify/Date *//* global addDays, addMonths */
function modify(mod_obj){
    const operations= Object.keys(mod_obj);
    return function(date_array){
        const dateObject= toDate(date_array);
        for(let i=0, operation; ( operation= operations[i] ); i++){
            if(operation==="addDays") addDays(mod_obj[operation])(dateObject);
            else if(operation==="addMonths") addMonths(mod_obj[operation])(dateObject);
            else if(operation==="setMonth") dateObject.setMonth(mod_obj[operation]-1);
            else if(Reflect.has(dateObject, operation)) dateObject[operation](mod_obj[operation]);
            else if(operation==="setDay") dateObject.setDate(mod_obj[operation]);
        }
        return fromDate(dateObject);
    };
}