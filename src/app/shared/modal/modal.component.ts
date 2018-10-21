import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef;

  constructor(private _renderer: Renderer2) { }

  ngOnInit() {
  }

  showModal() {
    this._renderer.setStyle(this.modal.nativeElement,
                            'display',
                            'block');
  }

  closeModal() {
    this._renderer.setStyle(this.modal.nativeElement,
                            'display',
                            'none');
  }

}
