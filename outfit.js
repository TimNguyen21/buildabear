class Outfit{
  constructor(id, title, garments, background){
    this.id = id;
    this.title = title;
    this.garments = garments;
    this.background = background;
  }
  removeGarment(){
    this.garments.splice(0,1);
  }
  addGarment(i, newGarment){
    this.garments[i] = newGarment;
  }

}
