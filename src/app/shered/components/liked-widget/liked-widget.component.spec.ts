import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppModule } from "src/app/app.module";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikedWidgetComponent } from "./liked-widget.component";

describe(LikedWidgetComponent.name, () => {
  // wrapper - o que embrulha e dentro tera a instancia do component  e trás uma serie de metodos ultilitarios
  let fixture: ComponentFixture<LikedWidgetComponent> = null;
  let component: LikedWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // caso resolva seguir a abordagem de teste first
      // declarations: [LikedWidgetComponent],
      // providers: [UniqueIdService],
      // imports: [FontAwesomeModule]
      // se criarmos o teste depois:
      imports: [AppModule],
      // permite a autodetecção mas não é recomendado
      // providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    }).compileComponents();
    fixture = TestBed.createComponent(LikedWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should auto generate ID when id input property is missing', ()=> {
    // dispara para obter a changes do component como o onInit, caso não utilize o provide autodetect como true
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });
  it('should NOT generate ID when id input property is present', ()=> {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });


})
