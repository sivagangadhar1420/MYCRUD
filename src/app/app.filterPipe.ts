import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    // transform(value){
    //    console.log(" aaaaaaa",value)
    // }

    filterdata = [];
    transform(value: any, search1) {

        console.log( " value  " , value, search1)
        if (search1 === undefined) {
            return value;
        }
        else {
            this.filterdata = [];
            for (let k of value) {
                console.log(k)
                // if (k.Title.toLowerCase().indexOf(search1) !== -1) {
                     if (k.Title.toLowerCase().indexOf(search1) >= 0) {
                    this.filterdata.push(k);
                }
            }
        } return this.filterdata;
    }
}