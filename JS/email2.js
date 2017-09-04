function Email(receiver, company, job, intend) {
  // Changeable
  this.receiver = receiver;
  this.email = "calpaliu@gmail.com";
  this.company = company;
  this.job = job;
  this.intend = intend;

  this.changeReceiver = () => {
    this.receiver = document.getElementById("receiver").value;
    this.generate();
  }

  this.changeCompany = () => {
    this.company = document.getElementById("company").value;
    this.generate();
  }

  this.changeJob = () => {
    this.job = document.getElementById("job").value;
    console.log(this.job);
    this.generate();
  }

  this.changeIntend = () => {
    this.intend = document.getElementById("intend").value;
    this.generate();
  }

  this.changeEmail = () => {
    this.email = document.getElementById("email").value;
  }

  // Not Changeable

  this.resume = "My resume is attached in this email. Thank you.";

  this.strong = "I am a Year 3 Chemical Engineering student studying in HKUST";

  this.hackathon = "I have participated in 5 hackathons, and won a 2nd winner place in the ImagineHack, organised by Microsoft.";

  this.last = "Regards,";
  this.name = "Calpa Liu";

  this.generate = () => {

    var space = "<br />" + "<br />"; //"%0D%0A" + "%0D%0A";
    this.application = "Application for " + this.intend;
		
    var line1 = "Dear " + this.receiver + ",";
    var line2 = "Thank you for sharing the opportunity of " + this.job + " in " + this.company + " in Science Park Career Expo this afternoon. Among all the job opportunities, I am most interested in the " + this.intend + " (Front-End).";
    var line3 = this.strong + ". " + this.hackathon;
    var line4 = " " + this.resume;
    var line5 = this.last + space + this.name;

    this.content = this.application + space + line1 + space + line2 + space + line3 + space + line4 + space + line5;

    this.update(this.content);
  }

  this.update = (e) => {
    document.getElementById("emailDone").innerHTML = e;
  }

  this.sendEmail = () => {
    var link = "mailto:" + this.email + "?subject=" + this.application + "&body=" + this.content;
    window.open(link);
  }

}

var receiver = "Calpa Liu";
var company = "Calpa";
var job = "Internship";
var intend = "Intern";

var Email = new Email(receiver, company, job, intend);
Email.generate();
