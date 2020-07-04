import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cssClass: string;
  private answers = [
              'Yes',
              'No',
              'It is certain.', 
              'It is decidedly so.', 
              'Without a doubt.',
              'Yes - definitely.', 
              'You may rely on it.', 
              'As I see it, yes.',
              'Most likely.', 
              'Outlook good.', 
              'Signs point to yes.', 
              'Reply hazy, try again.',
              'Ask again later.',
              'Better not tell you now.', 
              'Cannot predict now.',
              'Concentrate and ask again.',
              "Don't count on it.", 
              'My reply is no.',
              'My sources say no.',
              'Outlook not so good.', 
              'Very doubtful.'
            ]

  constructor(private tstCtrl: ToastController) {}


  giveAnswer() {

        this.cssClass = "animated shake";
        let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
        // this.presentToast(answer);
        
        var temp = this;
        setTimeout(function(){
          temp.presentToast(answer);
        }, 1500)

        return answer;
    }


  async presentToast(answer) {
    const toast = await this.tstCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss().then(() => {
      console.log('toast dismissed');
      this.cssClass = "";
    });
    
    toast.present();
    return answer;
   
  }

    getAnswers() {
      return this.answers
    }

  

}
