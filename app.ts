interface Personnage {
  nom:string,
  age:number
}

type Perso = {
  nom : string,
  age: number | string,
  status ?: "marie" | "celibataire"
}

const benoit:Perso = {
  nom:"Benoit",
  age:45,
};