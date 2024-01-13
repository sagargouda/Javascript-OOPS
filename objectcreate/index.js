const PersonProto = {
  calcAge() {
    console.log(2037 - this.birth);
  },
};

const sagar = Object.create(PersonProto);

sagar.name = "sagar";
sagar.birth = 2002;
sagar.calcAge();
