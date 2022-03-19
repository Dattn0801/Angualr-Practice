class Employee {
  constructor(name,age) {
    this.name = name;
    this.age =age;
  }
  DisplayName = () => "Name employee: " +this.name;
}
class ProgrammingEmployee extends Employee {
  constructor(name, age,language) {
    super(name,age);
    this.language = language;
  }
  DisplayAge = () => "Age employee: " +this.age;
}
function main() {
  let lst = [
    new ProgrammingEmployee("Dat", 15,'html'),
    new ProgrammingEmployee("Duy", 16,'js'),
    new ProgrammingEmployee("Tri", 17,'css'),
    new ProgrammingEmployee("Tai", 18,'ajax'),
  ].forEach(item => {
    console.log(item.DisplayName());
    console.log(item.DisplayAge());
    console.log('////////////')
  })
}
main();
