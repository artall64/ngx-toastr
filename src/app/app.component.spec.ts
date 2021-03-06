/* tslint:disable:no-unused-variable */
import 'rxjs/add/operator/toPromise';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ActiveToast } from 'ngx-toastr';

import { PinkToast } from './pink.toast';

function sleep(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(0); }, duration);
  });
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot({
          timeOut: 800,
          progressBar: true,
        }),
        FormsModule,
      ],
      declarations: [AppComponent],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should trigger onShown', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const opened: ActiveToast = app.openToast();
    opened.onShown.toPromise().then(() => {
      done();
    });
  });
  it('should trigger onHidden', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const opened: ActiveToast = app.openToast();
    opened.onHidden.toPromise().then(() => {
      done();
    });
  });
});
