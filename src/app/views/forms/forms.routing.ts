import { Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { WizardComponent } from './wizard/wizard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

export const FormsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "add-user",
        component: AddUserComponent,
        data: { title: "Add User", breadcrumb: "Add User" },
      },
      {
        path: "manage-users",
        component: ManageUsersComponent,
        data: { title: "Manage Users", breadcrumb: "Manage Users" },
      },
      {
        path: "basic",
        component: BasicFormComponent,
        data: { title: "Basic", breadcrumb: "BASIC" },
      },
      {
        path: "editor",
        component: RichTextEditorComponent,
        data: { title: "Editor", breadcrumb: "EDITOR" },
      },
      {
        path: "upload",
        component: FileUploadComponent,
        data: { title: "Upload", breadcrumb: "UPLOAD" },
      },
      {
        path: "wizard",
        component: WizardComponent,
        data: { title: "Wizard", breadcrumb: "WIZARD" },
      },
    ],
  },
];