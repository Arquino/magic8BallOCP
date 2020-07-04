import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("doit afficher un tableau non vide", () => {
    let result = component.giveAnswer();
    
    expect(Array.isArray(result)).toBeTruthy;
    expect(result.length).toBeGreaterThan(0);
  });

  it("renvoi une reponses aléatoir sous forme de string", () => {
    expect(typeof component.giveAnswer()).toBe("string");
  });
 

  it("doit voir si il y a une réponse Yes et une reponse No dans la liste des réponses", () => {
    let result = component.getAnswers();

    expect(result).toContain("Yes");
    expect(result).toContain("No");
  });
  
 

});
