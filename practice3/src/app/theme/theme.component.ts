import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements AfterViewInit {
  @ViewChild('name') elName!: ElementRef;
  @ViewChild('state') elState!: ElementRef;

  constructor() {}
  ngAfterViewInit() {
    this.elName.nativeElement.style.backgroundColor = 'cyan';
    this.elState.nativeElement.style.backgroundColor = 'red';
  }

  ngOnInit(): void {}
}
