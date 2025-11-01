import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: 'link' | 'dropDown' | 'icon' | 'separator' | 'extLink';
  name?: string;
  state?: string;
  icon?: string;
  svgIcon?: string;
  tooltip?: string;
  disabled?: boolean;
  sub?: IChildItem[];
  badges?: IBadge[];
  userLoggedIn?: boolean;
  action?: () => void;
}

interface IChildItem {
  type?: string;
  name: string;
  state?: string;
  icon?: string;
  svgIcon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isUsername: boolean = false;

  private iconMenu: IMenuItem[] = [];
  iconTypeMenuTitle = 'Frequently Accessed';

  menuItems = new BehaviorSubject<IMenuItem[]>([]);
  menuItems$ = this.menuItems.asObservable();

  constructor(private route: ActivatedRoute, private router: Router) {
    // Simulate getting user login state — you should replace with actual auth logic
    this.isUsername = this.getUserNameStatus();

    this.iconMenu = this.isUsername?[
      
      

      {
        name: 'Public Link',
        state: `${this.geturl()}`,
        type: 'link',
        icon: 'lock',
        
        action: () => {
          // window.location.reload();

    const currentUrl = this.route.url;
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      console.log(currentUrl)
      this.router.navigate([`${currentUrl}`]);
    });
  }
      }
      
    ]:[{
        name: 'Profile',
        state: 'user/profile',
        type: 'link',
        icon: 'person',
      },
      {
        name: 'Links',
        state: 'user/links',
        type: 'link',
        icon: 'link',
      },];

    this.menuItems.next(this.iconMenu);
  }

  private getUserNameStatus(): boolean {
    // Replace this with actual logic — e.g., from AuthService or route data
    // or false
    if (this.route.snapshot.data['user']) {
      console.log("username recieved from params", this.route.snapshot.paramMap.get('username'));
      return true;
    }
    return false;
  }

  publishNavigationChange(menuType: string) {
    // Customize if needed
    this.menuItems.next(this.iconMenu);
  }
  geturl(){
    return this.router.url;
  }
}
