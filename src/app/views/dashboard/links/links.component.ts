import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

import { LinksViewService } from 'app/services/linksView/links-view.service';
import { ResponseHandlerService } from 'app/services/responseHandlerService/response-handler.service';
import { UserOperationService } from 'app/services/userOperationServices/user-operation.service';
import { AddlinkComponent } from './addlink/addlink.component';
import { setUserName } from 'app/services/global';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  standalone: true,
  imports: [ CommonModule ,MatCardModule, MatIconModule, MatButtonModule, FormsModule, MatDialogModule, AddlinkComponent]
})
export class LinksComponent implements OnInit {
  @ViewChild('inputname') myInputname!: ElementRef;
  @ViewChild('inputurl') myInputurl!: ElementRef;
  private router = inject(Router);
  groupedOrders: { [key: number]: any[] } = {};
  constructor(private service:LinksViewService, private operationalService:UserOperationService,private route: ActivatedRoute ,public dialog: MatDialog) { }
  columnsToDisplay: string[] = [ 'url'];
  dataSource = [];
  ds:any;
  editingIndex: number | null = null;
  linkname: string = '';
  url: string = '';
  isLoggedIn: Boolean = false;
  userName: string = null;
  ngOnInit(): void {
    
    if(this.router.url == '/user/links'){
      this.isLoggedIn = this.route.snapshot.data['user']
    
    }
    else{
      this.userName = this.route.snapshot.paramMap.get('username');
      setUserName(this.userName);
     
    }
     console.log("username from route "+this.userName);
    console.log("is logged in "+this.router.url.split('/')[1]);
    console.log("calling service");
    this.service.getLinks(this.userName).subscribe({
      next: (res: any) => {
        
        
        
        
  
    

        
       this.groupedOrders = res.links.sort((a, b) => a.sortorder - b.sortorder);
       this.ds = {
  links: this.groupedOrders
};
       this.dataSource = this.ds.links;
       

//   this.groupedOrders = this.dataSource.reduce((acc, item) => {
//   const key = item.sortorder;
//   acc[key] = item; // Overwrites previous ones
//   return acc;
// }, {});

        
      },
      error: (err) => {
        if (err.status === 403) {
          console.error('403 Forbidden: You are not authorized to access this resource.');
          if(err.status===403){
            localStorage.clear();
            this.router.navigate(['/sessions/signin']);
          // 👉 Optional: show user message or redirect
          // this.snackBar.open('Access denied', 'Close', { duration: 3000 });
          // this.router.navigate(['/access-denied']);
        } else {
          console.error('An unexpected error occurred:', err);
        }
      }
    }

   


});

      
  
  }
   
  
     onAllowDrop(event: DragEvent) {
    event.preventDefault(); // Allow dropping
  }

  onDrag(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.setData("text", (event.target as HTMLElement).id);
    }
  }
  onDropChild(event: DragEvent) {
    
    event.preventDefault();
    
    console.log("drop child event");
  }
  onDragChild(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, index:any) {
    event.preventDefault();

    const data = event.dataTransfer?.getData("text");
    const draggedElement = document.getElementById(data!);
    const onDropElement = document.getElementsByClassName("wrapper")
    console.log(onDropElement[index])
    console.log(onDropElement[index].childNodes)
    console.log("Dragged Element Id: "+index)
    console.log(draggedElement.getAttribute("index"))

    if (draggedElement) {

      const parentElement = draggedElement.parentElement as HTMLElement
      const columnElement = draggedElement as HTMLElement
     
      try{
         onDropElement[index].appendChild(draggedElement);
      const data = {
        firstLinkId:index,
        secondLinkId:draggedElement.getAttribute("index")
      }
      parentElement.appendChild(onDropElement[index].childNodes[0] as HTMLElement);

      this.operationalService.reorderLinks(data).subscribe((res:any)=>{
        console.log(res);
      })
      }
      catch(error){
        console.error("Error in drag and drop"+" error: "+error)
      }
     
      
    }
  }
   Edit(index: number): void {
    console.log(typeof(index))
    console.log(" index is "+index + " url:"+this.dataSource[index].url)
    this.editingIndex = index;
   
    this.linkname = this.dataSource[index].title || '';
    this.url = this.dataSource[index].url || '';
    console.log(this.linkname)
  }
  changeValue(){
    console.log('New value for name:', this.linkname);
    console.log('New value for url:', this.url);
  }

  saveEdit(index: number): void {
    this.myInputname.nativeElement.blur();
    this.myInputurl.nativeElement.blur();
    console.log(this.linkname, this.url);
    console.log('Saving edit at index:', index);
    console.log(this.dataSource[index].title + " value "+this.linkname)
    const obj = {
      linkname:this.linkname,
      url: this.url
    }
    this.operationalService.updatelink(obj,this.dataSource[index].id).subscribe({
      next: (res: any) => {
      console.log(res);
      }
    })
    this.editingIndex = null;
    
    // TODO: Call API to save updated value if needed
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }
  
        openPopup(): void {
          const dialogRef = this.dialog.open(AddlinkComponent, {
            width: '50%', // Optional: Set dialog width
            data: { name: 'Angular User' } // Optional: Pass data to the popup component
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            // Handle data returned from the popup if any
          });
        }
  
}
