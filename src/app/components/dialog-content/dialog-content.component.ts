import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
  @Input() content: any;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerSubmit(event: boolean): void {
    this.submitForm.emit(event);
  }

}
