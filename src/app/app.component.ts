import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestion';

   
  liste: any = []
  listeEnCours: any = []
  listeTermine: any = []
  valeurChamp = {
    champId: '',
    champTache: ''
  }
  cpte = 0
  resterCache = false
  pageActive1 = ''
  pageActive2 = ''
  
  /* 
  //@ts-ignore
  document.getElementById('idDate')?.value == ''
  
  //@ts-ignore
  champDate: document.getElementById('idDate')?.value,
  
  //@ts-ignore
  document.getElementById('idDate')?.value = ''
  
  
  champDate: '',
  
  */
  
  //creer la tache
  creerTache () {
    if (//@ts-ignore
      document.getElementById('entretache')?.value == '') {
        alert('Veuillez renseigner le champs')
      } else {
        this.liste.push(
          {
            champId: this.cpte+=1,
            
            //@ts-ignore
            champTache: document.getElementById('entretache')?.value
          }
          )
          
          //@ts-ignore
          document.getElementById('entretache')?.value = ''
        }
      }
      
      //vider les champs
      supprimerTache (valRecu: any) {
        let i = 0
        let trouve = false
        
        while (i < this.liste.length && trouve == false) {
          if (this.liste[i].champId === valRecu) {
            trouve = true;
            this.liste.splice(i, 1);
          } else {
            i = i + 1;
          }
        }
      }
      
      ouvertureTache (valRecu: any, etat: string) {
        let i = 0
        let trouve = false
        
        if (etat == 'EC') {
          while (i < this.listeEnCours.length && trouve == false) {
            if (this.listeEnCours[i].champId === valRecu) {
              trouve = true;
              this.liste.push(
                this.listeEnCours[i]
                )
                this.listeEnCours.splice(i, 1);
              } else {
                i = i + 1;
              }
            }
          } else if (etat == 'T') {
            while (i < this.listeTermine.length && trouve == false) {
              if (this.listeTermine[i].champId === valRecu) {
                trouve = true;
                this.liste.push(
                  this.listeTermine[i]
                  )
                  this.listeTermine.splice(i, 1);
                } else {
                  i = i + 1;
                }
              }
            }
          }
          
          tacheEnCours (valRecu: any, etat: string) {
            let i = 0
            let trouve = false
            
            if (etat == 'Encours') {
              while (i < this.liste.length && trouve == false) {
                if (this.liste[i].champId === valRecu) {
                  trouve = true;
                  this.listeEnCours.push(
                    this.liste[i]
                    )
                    this.liste.splice(i, 1);
                  } else {
                    i = i + 1;
                  }
                }
              }
              }
              
              tacheTermine (valRecu: any, etat: string) {
                let i = 0
                let trouve = false
                
                if (etat == 'Terminer') {
                  while (i < this.liste.length && trouve == false) {
                    if (this.liste[i].champId === valRecu) {
                      trouve = true;
                      this.listeTermine.push(
                        this.liste[i]
                        )
                        this.liste.splice(i, 1);
                      } else {
                        i = i + 1;
                      }
                    }
                  } 
                  }
  
  






}
