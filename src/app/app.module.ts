import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
// import { SharedModule } from '@shared/shared.module';
// import { HomeComponent } from '@app/home/home.component';
// import { AboutComponent } from '@app/about/about.component';
// import { TodosComponent } from './components/todos/todos.component';

// tenants
// import { TenantsComponent } from '@app/tenants/tenants.component';
// import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
// import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles

// users



@NgModule({
    declarations: [
        AppComponent,
        // TodosComponent
        // HomeComponent,
        // AboutComponent,
        // tenants
        // TenantsComponent,
        // CreateTenantDialogComponent,
        // EditTenantDialogComponent,
        // roles
        // RolesComponent,
        // CreateRoleDialogComponent,
        // EditRoleDialogComponent,
        // users
        // UsersComponent,
        // CreateUserDialogComponent,
        // EditUserDialogComponent,
        // ChangePasswordComponent,
        // ResetPasswordDialogComponent,
        // layout
        // HeaderComponent,
        // HeaderLeftNavbarComponent,
        // HeaderLanguageMenuComponent,
        // HeaderUserMenuComponent,
        // FooterComponent,
        // SidebarComponent,
        // SidebarLogoComponent,
        // SidebarUserPanelComponent,
        // SidebarMenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // HttpClientModule.withFetch(), 
        HttpClientJsonpModule,
        ModalModule.forChild(),
        BsDropdownModule,
        CollapseModule,
        TabsModule,
        AppRoutingModule,
        // ServiceProxyModule,
        // SharedModule,
        // NgxPaginationModule,
    ],
    providers: [
        provideHttpClient()
      ],
})
export class AppModule {}
