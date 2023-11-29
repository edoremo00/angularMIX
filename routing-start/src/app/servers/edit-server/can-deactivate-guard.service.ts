import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { EditServerComponent } from './edit-server.component';
import { Observable } from 'rxjs';

//come per tutte le guard dobbiamo usare o un servizio o definire direttamente una function all'interno del modulo
//queste classi devono implementare l'interfaccia della guard che ci serve
//particolarità della can deactivate è che questa interfaccia richiede un generic
//questo generic type deve essere il componente o comunque un interfaccia che i componenti che vogliono usare questa guard devono avere
//questo perchè il controllo del poter uscire o meno da una pagina è delegato al componente stesso
export class CanDeactivateService
  implements CanDeactivate<EditServerComponent>
{
  canDeactivate(
    component: EditServerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return component.onComponentDeactivate();
  }
}
