import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './nav-button.html',
  styleUrl: './nav-button.scss',
})
export class NavButton implements AfterViewInit, OnDestroy {
  private _elementRef: ElementRef = inject(ElementRef);
  private _observer!: MutationObserver;

  type = 'button';
  isActive = false;

  @Input() text = '';
  @Input() iconUrl = '';
  @Input() iconUrlActive = '';
  @Input() disabled = false;
  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  ngAfterViewInit(): void {
    this._observer = new MutationObserver(() => {
      this.isActive = this._elementRef.nativeElement.classList.contains('active');
    });

    this._observer.observe(this._elementRef.nativeElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  ngOnDestroy(): void {
    this._observer?.disconnect();
  }
}
