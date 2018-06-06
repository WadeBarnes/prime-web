import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MillerColumnConfig } from '../../components/miller-columns/miller-columns.interface';
import { PrimeDataService } from '../../../../services/prime-data.service';


@Component({
  selector: 'prime-site-enrollment',
  templateUrl: './site-enrollment.component.html',
  styleUrls: ['./site-enrollment.component.scss']
})
export class SiteEnrollmentComponent implements OnInit {
  public millerColumnByCollection: MillerColumnConfig;

  constructor(private dataService: PrimeDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.millerColumnByCollection = this.dataService.getMillerColumnDataByCollection();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.millerColumnByCollection.options.preselectObjectId = id;
    }

  }

}