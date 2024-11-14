import { makeAutoObservable } from "mobx";
import { MobxAngularModule, observable } from 'mobx-angular';

class Store {
    @observable clients: any[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setClients(newClients: any[]) {
        this.clients = newClients;
    }
}

export const store = new Store();
