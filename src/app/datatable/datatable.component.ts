import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';
import { Observable } from 'rxjs/Observable';
import { DataSource} from '@angular/cdk/collections'
import {User } from '../models/user.model'

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  dataSource = new UserDataSource(this.watchService)
  displayedColumns = ['username', 'steps', 'heartrate']

  constructor(private watchService: WatchService) { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any>{
  constructor(private watchService: WatchService){
    super()
  }
  connect(): Observable<User[]>{
    return this.watchService.getUser()
  }
  disconnect(){}
}