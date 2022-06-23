import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent implements AfterViewInit {
  @ViewChild('tname') elname!: ElementRef;
  @ViewChild('tstate') elstate!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    this.elname.nativeElement.style.backgroundColor = 'orange';
    this.elname.nativeElement.style.color = 'blue';
  }

  ngOnInit(): void {}
}
