import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

   constructor(private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
	
	if (localStorage.getItem('token')) {
        return true;
      } else {
        this.router.navigate(["/login"]);
      }
	
	
	}
}
