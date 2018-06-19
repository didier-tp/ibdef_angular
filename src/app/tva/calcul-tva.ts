export class CalculTva {
    ht : number ;
    taux : number ; //en %
    tva : number ;
    ttc : number ; 

    calculer() : void {
        this.tva = this.ht * (this.taux / 100) ;
        //this.ttc = this.ht  + this.tva;
        this.ttc = Number(this.ht)  + Number(this.tva);
    }
}
