import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

import { TrainingService } from './training.services';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  providers: [TrainingService],
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  html_content: string = '';
  fileName: string = '';

  constructor(private http: TrainingService) {}

  loadData(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'text/csv'
      ) {
        const body: FormData = new FormData();
        body.append('file', file);

        this.http.sendPost(body).subscribe((res) => {
          this.html_content = res;
          localStorage.setItem('dataSet', JSON.stringify(res));
        });

        
      } else {
        console.log('This file is not supported');
      }
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('dataSet') !== null){
      this.html_content = JSON.parse(localStorage.getItem('dataSet')!) || '';
    }
  }
}
