class Employee1 {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {
        Employee1.headcount++;
      }
      public static getHeadcount() {
        return Employee1.headcount;
    }
}
