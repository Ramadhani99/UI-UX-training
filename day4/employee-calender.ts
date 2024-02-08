class Calender {
  name: string;
  mname: string;
  getleaves() {}
  applyLeave() {}
}

class TeamCalender extends Calender {
  month: string;

  constructor(month: string, name: string, mname: string) {
    super();
    this.month = month;
    [];
  }
  approve() {
    console.log("laeve for" + super.name + "successfuly approved");
  }
  reject() {
    console.log("laeve for" + super.name + "rejected");
  }
  displayAllTeamLeaves() {}
}
