import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ArrozLibService {

  private _user$ = new BehaviorSubject<string | null>(null);

  public get user$(): BehaviorSubject<string | null> {
      return this._user$;
  }

  public login(userName: string, password: string | null): void {
      this._user$.next(userName);
  }
}
