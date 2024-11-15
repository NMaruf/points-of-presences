import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPointPresences } from '../interfaces/points.interface';
import { store } from '../../store/store';

@Injectable({
  providedIn: 'root'
})
export class PointsOfPresencesService {

  http = inject(HttpClient)

  constructor() { }

  // getMrkpListWithFilters() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //         const data = {
  //             results: [
  //                 { name: "Luke Skywalker", height: "172", mass: "77" },
  //                 { name: "Darth Vader", height: "202", mass: "136" },
  //                 { name: "Leia Organa", height: "150", mass: "49" }
  //             ],
  //             count: 3
  //         };
  //         resolve(data);
  //     }, 500);
  // });
  // }

  // getMrkpListWithFilters(): Observable<any> {
getMrkpListWithFilters() {
    
    // return this.http.get<IPointPresences>(`pzp-mrkp/points`)

  // return of(MockListWithFilters);

  setTimeout(() => {
    store.setClients(MockListWithFilters.clients);
  }, 1000); // Задержка в 2 секунды
  }
}


const MockListWithFilters = {
    departments: [
        {
            id: 277,
            uuid: "5dd58fa9-fc18-4293-a02d-e7b75e5eaf12",
            name: {
                RU: "РОО Новосибирский",
                EN: null,
            },
            type: "REGIONAL",
        },
    ],
    chosenDepartment: {
        id: 277,
        uuid: "5dd58fa9-fc18-4293-a02d-e7b75e5eaf12",
        name: {
            RU: "РОО Новосибирский",
            EN: null,
        },
        type: "REGIONAL",
    },
    recordCount: 4,
    clients: [
        {
            clientSlxId: "L6UJ9A00ER27",
            clientName: {
                RU: '"CG"',
                EN: 'Ytdmqqd nbsvbtutn scjhwiu, "JATQWE YEFRI"',
            },
            clientInn: "1186949150",
            cardIssuedOpenCount: 5,
            employeeNumber: 124,
            markerTypeId: [6],
            logo: "https://www.dsnovik.ru/sites/default/files/yurenergo_350.jpg",
            pointsOfPresence: [
                {
                    id: "94a14198-730c-489a-94ca-b450e507a501",
                    createUserId: 1,
                    createStamp: "2024-02-20T07:59:18.0514",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-16T15:22:18.688277",
                    clientSlxId: "L6UJ9A00ER27",
                    bgRooId: 277,
                    name: "Test 234grbdfh",
                    address: "London",
                    peopleNumber: 745,
                    shiftsNumber: 4535443,
                    city: null,
                    assignedDsa: "Алексеев А.А.",
                    assignedMrkp: "Лаптев А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-16",
                    nextCallDate: "2024-09-11",
                    lastActivityDate: "2024-04-28T10:00:00Z",
                    lastActivityTypeId: 4,
                    lastActivityId: "267b7b36-5a28-4bd5-8cfb-47355605f7a7",
                    nextActivityDate: "2024-04-03T12:00:00Z",
                    nextActivityTypeId: 4,
                    nextActivityStatusId: 4,
                    nextActivityId: "267b7b36-5a28-4bd5-8cfb-47842805f7ba",
                    version: 15,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Петров А.А.",
                    phone: "4575685",
                    position: "Специалист",
                    clientMembers: [],
                },
                {
                    id: "51d46fee-80c1-48be-ba91-1123da0fd176",
                    createUserId: 915,
                    createStamp: "2024-05-14T07:33:14.374839",
                    modifyUserId: 915,
                    modifyStamp: "2024-10-01T12:57:58.733601",
                    clientSlxId: "L6UJ9A00ER27",
                    bgRooId: 277,
                    name: "test5462345645",
                    address: "692917 Россия край Приморский г Находка ул Верхне-Морская дом 110",
                    peopleNumber: 158,
                    shiftsNumber: 134,
                    city: null,
                    assignedDsa: "Шорохов А.А.",
                    assignedMrkp: "Широков А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-10-01",
                    nextCallDate: "2024-10-10",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 8,
                    needUpdateClientMember: false,
                    needUpdateAddress: false,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Александров А.А.",
                    phone: "4575685",
                    position: "Инженер",
                    clientMembers: [
                        {
                            contactId: 12332,
                            contactGuid: "51d46fee-0000-48be-ba91-1123da0fd176",
                            fullName: null,
                            shortName: null,
                            position: "Специалист",
                            phone: "123123412",
                            mobilePhone: "1231231",
                            workPhone: "1231231",
                            email: "123123@mail.ru",
                            mainContact: true,
                            actual: true,
                        },
                    ],
                },
                {
                    id: "267b7b36-5a28-4bd5-8cfb-47843205f7ba",
                    createUserId: 1,
                    createStamp: "2024-02-20T07:58:32.632478",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-16T15:11:14.33344",
                    clientSlxId: "L6UJ9A00ER27",
                    bgRooId: 277,
                    name: "Test1",
                    address: "Paris",
                    peopleNumber: 455,
                    shiftsNumber: 1,
                    city: null,
                    assignedDsa: "Шилов А.Р.",
                    assignedMrkp: "Высоков А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-16",
                    nextCallDate: "2024-09-24",
                    lastActivityDate: "2024-01-30T09:30:00Z",
                    lastActivityTypeId: 6,
                    lastActivityId: "267b7b36-5a28-1ad7-8cfb-45597205a7ba",
                    nextActivityDate: "2023-03-03T14:00:00Z",
                    nextActivityTypeId: 3,
                    nextActivityId: "267b7b36-5a28-2bd5-8cfb-47843205f7ba",
                    version: 14,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Петров А.А.",
                    phone: "4575685",
                    position: "Специалист",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "dsfern",
                            shortName: "dsfern",
                            position: "Специалист",
                            phone: "4574577564",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "7a665910-9a45-4022-b30d-ce4bc23f4dda",
                    createUserId: 915,
                    createStamp: "2024-05-14T07:16:10.643875",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-16T12:58:55.205513",
                    clientSlxId: "L6UJ9A00ER27",
                    bgRooId: 277,
                    name: "testTP12",
                    address: "Moscow",
                    peopleNumber: 237,
                    shiftsNumber: 423,
                    city: null,
                    assignedDsa: "Романов А.А.",
                    assignedMrkp: "Дмитриев А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-18",
                    nextCallDate: null,
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 2,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Сидоров А.А.",
                    phone: "4575685",
                    position: "Аналитик",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: null,
                            shortName: null,
                            position: "Специалист",
                            phone: null,
                            mobilePhone: null,
                            workPhone: null,
                            email: null,
                            mainContact: true,
                            actual: false,
                        },
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: null,
                            shortName: null,
                            position: "Специалист",
                            phone: null,
                            mobilePhone: null,
                            workPhone: null,
                            email: null,
                            mainContact: false,
                            actual: false,
                        },
                    ],
                },
            ],
        },
        {
            clientSlxId: "L6UJ9A00EQB7",
            clientName: {
                RU: "AIMAMLAS CMAHEBUHILF NEMIDYZR HAHOSBY",
                EN: "VGDTEKTA JPASDRVQKHQ FCPZXHDE MKAYJTA",
            },
            clientInn: "9583980839",
            cardIssuedOpenCount: 456,
            employeeNumber: 12,
            markerTypeId: [6],
            logo: "https://s.tmimgcdn.com/scr/800x500/254100/kniga-ctenie-logotip-obrazovanie-vektor-v1_254132-original.jpg",
            pointsOfPresence: [
                {
                    id: "564506c2-0966-4f1f-af8a-78c60c883367",
                    createUserId: 1,
                    createStamp: "2024-02-20T08:06:44.642299",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-16T15:37:54.929442",
                    clientSlxId: "L6UJ9A00EQB7",
                    bgRooId: 277,
                    name: "asdAsdAsd",
                    address: "address string2",
                    peopleNumber: 545,
                    shiftsNumber: 15,
                    city: null,
                    assignedDsa: "Носов А.А.",
                    assignedMrkp: "Головин А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-16",
                    nextCallDate: "2024-06-27",
                    lastActivityDate: "2023-06-03T07:00:00Z",
                    lastActivityTypeId: 6,
                    lastActivityId: "577506c2-0966-4f1f-af8a-78c60c883367",
                    nextActivityDate: "2024-03-18T07:00:00Z",
                    nextActivityTypeId: 4,
                    nextActivityId: "534506c2-0966-4f1f-af8a-78c60c883367",
                    version: 13,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Лаптев А.А.",
                    phone: "4575685",
                    position: "Специалист",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "frtntyntym",
                            shortName: "frtntyntym",
                            position: "Специалист",
                            phone: "4575685",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "2b1dd55c-98ed-41b9-aaf2-39f947a56f21",
                    createUserId: 1,
                    createStamp: "2024-02-20T08:07:27.518739",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-13T13:26:05.793503",
                    clientSlxId: "L6UJ9A00EQB7",
                    bgRooId: 277,
                    name: "Test98",
                    address: "dsrtntrm",
                    peopleNumber: 236,
                    shiftsNumber: 1556,
                    city: null,
                    assignedDsa: "Грибанов А.А.",
                    assignedMrkp: "Командин А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-13",
                    nextCallDate: "2024-09-26",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: "2024-03-21T14:27:00Z",
                    nextActivityTypeId: 1,
                    nextActivityId: "2b2dd55c-98ed-41b9-aaf2-39f947a56f21",
                    version: 104,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Серов А.А.",
                    phone: "4575685",
                    position: "Консультант",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "dgrenetym",
                            shortName: "dgrenetym",
                            position: "Специалист",
                            phone: "45567456756",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
            ],
        },
        {
            clientSlxId: "L6UJ9A007I7A",
            clientName: {
                RU: "Nhomijom Bepejefcels ZG",
                EN: "Azxcnwgw Pnhdhdvxpak DZ ",
            },
            clientInn: "750006100044",
            cardIssuedOpenCount: 8,
            employeeNumber: 137,
            markerTypeId: [6],
            logo: "https://st.weblancer.net/download/3158393_935xp.jpg",
            pointsOfPresence: [
                {
                    id: "858bce94-33c9-4036-9fd2-294ffabc33a8",
                    createUserId: 1,
                    createStamp: "2024-02-20T08:09:22.506551",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-13T09:16:57.146195",
                    clientSlxId: "L6UJ9A007I7A",
                    bgRooId: 277,
                    name: "zxczxcpoiuy",
                    address: "ftyntyntymt",
                    peopleNumber: 45,
                    shiftsNumber: null,
                    city: null,
                    assignedDsa: "Колодин А.А.",
                    assignedMrkp: "Акинфеев А.А.",
                    pointOfPresenceStatusId: 2,
                    lastCallDate: "2024-09-13",
                    nextCallDate: "2024-09-17",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 4,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Алексеев А.А.",
                    phone: "4575685",
                    position: "Специалист",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "fhnrnyumy",
                            shortName: "fhnrnyumy",
                            position: "Специалист",
                            phone: "4576587678",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "313b7487-3c33-4d52-a0c9-60aa9cbb85b5",
                    createUserId: 1,
                    createStamp: "2024-02-20T08:08:13.027478",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-13T09:17:16.251358",
                    clientSlxId: "L6UJ9A007I7A",
                    bgRooId: 277,
                    name: "zxcZxcZxcZxcZxc",
                    address: "jtryjtryjty",
                    peopleNumber: 45647,
                    shiftsNumber: 46,
                    city: null,
                    assignedDsa: "Правин А.А.",
                    assignedMrkp: "Дмитриев А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-13",
                    nextCallDate: "2024-09-11",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: "2024-07-06T07:30:00Z",
                    nextActivityTypeId: 1,
                    nextActivityId: "113b7487-3c33-4d52-a0c9-60aa9cbb85b5",
                    version: 2,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Максимов А.А.",
                    phone: "4575685",
                    position: "Инженер",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "gntu,mtuyghv",
                            shortName: "gntu,mtuyghv",
                            position: "Специалист",
                            phone: "457587",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
            ],
        },
        {
            clientSlxId: "L000001OLOJS",
            clientName: {
                RU: "Тест",
                EN: "Test",
            },
            clientInn: "752226122944",
            cardIssuedOpenCount: 5,
            employeeNumber: 7,
            markerTypeId: [6],
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrZ6_5t6hBL4R5DvNo-GDVzEBm-jr6vJY84wUMnWXeGCkGiKcPk4aX6X29ADHpApxCac&usqp=CAU",
            pointsOfPresence: [
                {
                    id: "a7b26220-392f-45a6-861e-ca2ac914c39e",
                    createUserId: 274252,
                    createStamp: "2023-10-31T07:16:19",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-12T14:42:30.848735",
                    clientSlxId: "L000001OLOJS",
                    bgRooId: 277,
                    name: "asdAsdAsdgere",
                    address: "Moscow",
                    peopleNumber: 134,
                    shiftsNumber: 1,
                    city: "1",
                    assignedDsa: "Головин А.А.",
                    assignedMrkp: "Петров А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-12",
                    nextCallDate: "2024-09-17",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 2,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Денисов А.А.",
                    phone: "4575685",
                    position: "Инженер",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "123",
                            shortName: "123",
                            position: "Специалист",
                            phone: "12343643656",
                            mobilePhone: null,
                            workPhone: null,
                            email: "123",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "de7f2d89-50f1-499a-908f-edf7ec4aa68b",
                    createUserId: 1,
                    createStamp: "2024-02-06T11:58:37.567565",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-12T14:47:32.501588",
                    clientSlxId: "L000001OLOJS",
                    bgRooId: 277,
                    name: "zxcZxcZxc",
                    address: "Paris",
                    peopleNumber: 5647,
                    shiftsNumber: null,
                    city: null,
                    assignedDsa: "Барабанов А.А.",
                    assignedMrkp: "Петров А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-12",
                    nextCallDate: "2024-09-18",
                    lastActivityDate: "2020-12-03T07:00:00Z",
                    lastActivityTypeId: 5,
                    lastActivityId: "de2f2d89-50f1-499a-908f-edf7ec4aa68b",
                    nextActivityDate: "2024-03-01T10:00:00Z",
                    nextActivityTypeId: 4,
                    nextActivityId: "de1f2d89-50f1-499a-908f-edf7ec4aa68b",
                    version: 2,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Козлов А.А.",
                    phone: "4575685",
                    position: "Аналитик",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "fgetyuttu",
                            shortName: "fgetyuttu",
                            position: "Специалист",
                            phone: "45778675",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "fa57c7da-83ad-4257-8b24-15714c1e0f5c",
                    createUserId: 1,
                    createStamp: "2024-02-06T09:22:58.496408",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-12T14:49:27.021471",
                    clientSlxId: "L000001OLOJS",
                    bgRooId: 277,
                    name: "TP 0602",
                    address: "Msk",
                    peopleNumber: 345,
                    shiftsNumber: 345,
                    city: null,
                    assignedDsa: "Хлопин А.А.",
                    assignedMrkp: "Широков А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-12",
                    nextCallDate: "2024-04-18",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 2,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Банов А.А.",
                    phone: "4575685",
                    position: "Специалист",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "terter",
                            shortName: "terter",
                            position: "Специалист",
                            phone: "365676578",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "0cc7f8b4-fd0e-47ef-a514-503fef12330d",
                    createUserId: 1,
                    createStamp: "2024-02-06T11:58:02.401082",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-12T15:05:40.129585",
                    clientSlxId: "L000001OLOJS",
                    bgRooId: 277,
                    name: "asdAsdAsd",
                    address: "hdfthrt",
                    peopleNumber: 546,
                    shiftsNumber: null,
                    city: null,
                    assignedDsa: "Андреев А.А.",
                    assignedMrkp: "Денисов А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-12",
                    nextCallDate: "2024-05-21",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 2,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Баранов А.А.",
                    phone: "4575685",
                    position: "Аналитик",
                    clientMembers: [
                        {
                            contactId: null,
                            contactGuid: null,
                            fullName: "dhryjyjty",
                            shortName: "dhryjyjty",
                            position: "Специалист",
                            phone: "34547567",
                            mobilePhone: null,
                            workPhone: null,
                            email: "",
                            mainContact: true,
                            actual: false,
                        },
                    ],
                },
                {
                    id: "5d8c58a1-79e2-44be-bf14-76a48bfbc002",
                    createUserId: 1,
                    createStamp: "2024-02-06T11:56:41.709903",
                    modifyUserId: 915,
                    modifyStamp: "2024-09-12T15:10:32.981317",
                    clientSlxId: "L000001OLOJS",
                    bgRooId: 277,
                    name: "qweQweQwe",
                    address: "ertrtyrtyr",
                    peopleNumber: 677646,
                    shiftsNumber: 45,
                    city: null,
                    assignedDsa: "Жирков А.А.",
                    assignedMrkp: "Петров А.А.",
                    pointOfPresenceStatusId: 1,
                    lastCallDate: "2024-09-18",
                    nextCallDate: "2024-02-19",
                    lastActivityDate: null,
                    lastActivityTypeId: null,
                    lastActivityId: null,
                    nextActivityDate: null,
                    nextActivityTypeId: null,
                    nextActivityId: null,
                    version: 5,
                    needUpdateClientMember: true,
                    needUpdateAddress: true,
                    marker1: null,
                    marker2: null,
                    marker3: null,
                    marker4: null,
                    marker5: null,
                    marker6: null,
                    marker7: null,
                    marker10: null,
                    clientMember: "Лодыгин А.А.",
                    phone: "4575685",
                    position: "Специалист",
                    clientMembers: [],
                },
            ],
        },
    ],
};
