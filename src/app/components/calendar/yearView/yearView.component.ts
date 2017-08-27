import {Component, OnInit, Input} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    selector: 'year-view',
    templateUrl: './yearView.template.html'
})
export class YearViewComponent implements OnInit {
    @Input('year') currentDate: moment.Moment;
    monthRows: any[];
    currentYearName: string;
    
    ngOnInit() {
        this.currentYearName = this.currentDate.format('YYYY');
        let counter = 0;
        this.monthRows = _.times(4, () => {
            return _.times(3, () => {
                return moment(this.currentDate).month(counter++);
            });
        });
    }
    
}
