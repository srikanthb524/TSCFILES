class Student {

  id: number;
  name:string;
constructor(){}
  display():void {
      console.log("Student ID is: "+this.id)
      console.log("Student ID is: "+this.name)
  }
}

class College extends Student
{
collegeId:number;
constructor(){
  super();
}

}
let obj = new Student();
obj.id = 101;
obj.name = "Virat Kohli";
obj.display();



let obj2 = new College();
obj2.id=102;
obj2.name="abcd";
obj2.display();
