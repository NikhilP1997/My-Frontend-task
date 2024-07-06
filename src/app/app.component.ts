import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
title = 'hadiya_products_admin';
constructor(private http: HttpClient) {}
ngOnInit() {
this.http.get('http://backendLoadBalancer-1781860790.us-east-2.elb.amazonaws.com').subscribe((data: any) => {
console.log(data);
});
}
}
