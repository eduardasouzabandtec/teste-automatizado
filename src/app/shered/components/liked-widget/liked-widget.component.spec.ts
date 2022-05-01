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

  it('Should auto-generate ID during ngOnInput when (@Input id) is not assigned', ()=> {
    // dispara para obter a changes do component como o onInit, caso não utilize o provide autodetect como true
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });
  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', ()=> {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  //modo 1
  it(`should #${LikedWidgetComponent.prototype.like.name} should trigger (@Output liked) when called  `, done =>{
    fixture.detectChanges();
    // pois o eventEmitter é um observable 
    component.liked.subscribe(() =>{
      expect(true).toBeTrue();
      // torno assincrono
      done()
    })
    component.like();
  });

  //modo 2
  it(`should #${LikedWidgetComponent.prototype.like.name} should trigger emission when called  `, () =>{
    // o que eu quero espionar
    spyOn(component.liked, 'emit')
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });


})
