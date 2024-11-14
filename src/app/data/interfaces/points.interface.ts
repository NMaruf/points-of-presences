export interface SortingOptions {
    sortField: string;
    isAscending: boolean;
}

export interface IAction {
    start: string;
    end: string;
}

export interface IPointPresencesFilters {
    pageNumber: number;
    pageSize: number;
    sortingOption?: SortingOptions;
    currentDate?: string;
    pointOfPresenceId?: string;
    departmentId?: number;
    searchText?: string;
    lastCall?: IAction;
    nextCall?: IAction;
    lastActivity?: IAction;
    nextActivity?: IAction;
    pointOfPresenceStatusesId?: number[];
    directSales?: number[];
    isExpired?: boolean;
}

export interface IPointPresences {
    departments: IDepartment[];
    chosenDepartment?: IDepartment;
    clients: IClient[];
    recordCount?: number;
}

export interface IDepartment {
    id: number;
    name: string;
    type: string;
}

export interface IClient {
    clientSlxId: string;
    clientName: string;
    clientInn: string;
    pointsOfPresence: IPointPresence[];
    markerTypeId: number[];
}

export interface IContactPerson {
    id: string;
    createUserId: number;
    createStamp: string;
    modifyUserId: number;
    modifyStamp: string;
    clientSlxId: string;
    fullName: string;
    position: string;
    phone: string;
    email: string;
    isMain?: boolean;
    actual: boolean;
}

export interface IContactMember {
    actual: boolean;
    contactGuid: string;
    contactId: number;
    email: string;
    fullName: string;
    mainContact: boolean;
    mobilePhone: string;
    phone: string;
    position: string;
    shortName: string;
    workPhone: string;
}

export interface IPointPresence {
    version?: any;
    id: string;
    createUserId: number;
    createStamp: string;
    modifyUserId: number;
    modifyStamp: string;
    clientSlxId: string;
    bgRooId: number;
    name: string;
    address: string;
    peopleNumber: number;
    shiftsNumber: number;
    city: string;
    assignedMrkp: string;
    assignedDsa: string;
    pointOfPresenceStatusId: number;
    lastCallDate: string;
    nextCallDate: string;
    lastActivityDate: string;
    lastActivityTypeId: number;
    nextActivityDate: string;
    nextActivityTypeId: number;
    contactPersons?: IContactPerson[];
    clientMembers?: IContactMember[];
    needUpdateAddress?: boolean;
    needUpdateClientMember?: boolean;
}