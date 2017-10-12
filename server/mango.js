class MangoTree {
  constructor(age, height, fruits, healthy) {
    this.age = age;
    this.height = height;
    this.fruits = fruits;
    this.healthy = healthy;
    this.harvested = [];   // fruits
    this.good = 0;
    this.bad = 0;
  }
  getAge () {
    return this.age;
  }
  getHeight () {
    return this.height;
  }
  getFruits () {
    return this.fruits;
  }
  gethealthy () {
    return this.healthy;
  }
  grow () {
    this.age++;
    if (this.age == 12) {
      this.healthy = false;
    }
    if(this.age <= 7){
      this.height += Math.floor(Math.random() * 3);
    }
  }
  produceMangoes () {
    if(this.age >= 1){
      for(let i=0; i < Math.floor(Math.random() * 10); i++){
        this.harvested.push(new Mango());
      }
    }
  }
  harvest () {
    this.good = 0;
    this.bad = 0;
    for(let i=0; i<this.harvested.length; i++){
      if(this.harvested[i].quality == 'bad'){
        this.bad++;
      } else {
        this.good++;
      }
    }
    this.fruits = this.harvested.length;
    this.harvested = [];
  }
}

class Mango {
  constructor() {
    this.quality = this.qualityFresh();
  }
  //methods
  qualityFresh(){
    let quality = ['good','bad'];
    let condition = Math.floor(Math.random() * quality.length)
    if (condition == 0) {
      return quality[0]
    }
    else {
      return quality[1];
    }
  }
}

module.exports = {
  MangoTree,
  Mango
}
