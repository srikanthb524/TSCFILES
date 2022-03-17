class Id{
ID:number;
}


interface IStudent extends Id
{
  studentId: number;
  studentName: string;
}

interface IDisplay
{
  display():void;
}
class Student1 implements IStudent, IDisplay
{
  ID: number;
  studentName: string;
  studentId: number;
  courseName:string;
  display(): void {
   console.log("from interface");
  }

  disp():void{
    console.log("From class");
  }


}

