import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  OutputEmitterRef,
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

  text = input('');
  iconUrl = input('');
  iconUrlActive = input('');
  disabled = input(false);

  clicked: OutputEmitterRef<Event> = output();

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
