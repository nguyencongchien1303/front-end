import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerModule } from "./views/customers/customer.module";
import { EnterpriseModule } from "./views/enterprise/enterprise.module";
import { DatePipe } from "@angular/common";
import { AdminModule } from "./views/admin/admin.module";

// import { MatInputModule } from "@angular/material/input";
// import { MatPaginatorModule } from "@angular/material/paginator";
// import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
// import { MatSortModule } from "@angular/material/sort";
// import { MatTableModule } from "@angular/material/table";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomerModule,
    EnterpriseModule,
    AppRoutingModule,
    AdminModule,
    ToastrModule.forRoot(),
    // MatInputModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatTableModule,
    // BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
