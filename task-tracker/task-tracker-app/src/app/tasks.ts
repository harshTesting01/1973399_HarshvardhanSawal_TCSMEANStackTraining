export class tasks {
    id: number;
    name: string;
    task: string;
    date: any;

    constructor(id: number, name: string, task: string, date: any){
        this.id = id;
        this.name = name;
        this.task = task;
        this.date = date;
    }
  }