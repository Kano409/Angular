import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false,
})
export class AppComponent {
  title = 'module';
  name:any;
  students: any[] = [];
  constructor() {
    this.students = [
      {
        id: 101,
        name: 'king',
        class: 'MCA',
      },
      {
        id: 102,
        name: 'kano',
        class: 'B.Tech',
      },
      {
        id: 103,
        name: 'abhu',
        class: 'MA',
      },
      {
        id: 104,
        name: 'rajesh',
        class: 'Bsc',
      },
      {
        id: 105,
        name: 'meena',
        class: 'Mcom',
      },
    ];
  }
  // @HostListener('click', ['$event'])
  // onHostClick(event: Event) {
  //   alert('Host Listener');
  // }

  checkNow = false;
  onFun() {
    this.checkNow = true;
    this.title = 'changing';
    alert('click on button....!');
  }

  workRadio: boolean = true;
  onCheck(xyz: any) {
    this.workRadio = xyz;
  }

  public choose = '';
  setValue(drp: any) {
    this.choose = drp.target.value;
  }

  getBinding() {
    this.students = [
      {
        id: 101,
        name: 'king',
        class: 'MCA',
      },
      {
        id: 102,
        name: 'kano',
        class: 'B.Tech',
      },
      {
        id: 103,
        name: 'abhu',
        class: 'MA',
      },
      {
        id: 104,
        name: 'rajesh',
        class: 'Bsc',
      },
      {
        id: 105,
        name: 'meena',
        class: 'Mcom',
      },
      {
        id: 106,
        name: 'rudra',
        class: 'Mbbs',
      },
    ];
  }

  trackData(index: number, student: any) {
    return student.id;
  }

  countryDetails: any[] = [
    {
      country: 'India',
      person: [
        {
          name: 'narendra modi',
        },
        {
          name: 'amit shah',
        },
        {
          name: 'yogi adityanath',
        },
        {
          name: 'nitin gadakari',
        },
      ],
    },
    {
      country: 'Russia',
      person: [
        {
          name: 'vladimir putin',
        },
        {
          name: 'donald trump',
        },
        {
          name: 'netan nyahu',
        },
        {
          name: 'boris johnsan',
        },
      ],
    },
  ];

  states = ['gujarat', 'maharastra', 'madhyapradesh', 'goa'];

  getCss(flag: string) {
    let a;
    if (flag == 'mode') {
      a = {
        three: true,
      };
    } else {
      a = {
        three: false,
      };
    }
    return a;
  }
}
