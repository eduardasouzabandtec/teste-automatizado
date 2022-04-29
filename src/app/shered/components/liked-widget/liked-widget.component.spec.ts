import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikedWidgetComponent } from "./liked-widget.component";

describe(LikedWidgetComponent.name, ()=>{
  // wrapper - o que embrulha e dentro tera a instancia do component  e trá uma serie de metodos ultilitarios
  let fixture : ComponentFixture<LikedWidgetComponent> = null;

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations: [LikedWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LikedWidgetComponent) 
  });
  it('should create', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });


})
