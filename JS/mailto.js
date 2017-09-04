function Email(name, receiver, event) {
    // Changeable
    this.name = name;
    this.receiver = receiver;
    this.event = event;

    this.changeName = () => {
        this.name = document.getElementById("receiver").value;
        this.generate();
    }

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

    this.changeEvent = () => {
        var events = document.getElementsByName("Event");
        var selectedevent = "None";

        for (var i = 0; i < events.length; i++) {
            if (events[i].checked)
                selectedevent = events[i].value;
        }
        console.log(selectedevent);

        switch (selectedevent) {
            case "Outdoor Activity":
                this.event = " We will organize an outdoor activity";
                break;
            case "Indoor Activity":
                this.event = " We will organize a indoor activity";
                break;
            default:
                this.event = " ";
        }
        this.generate();
    }


    // Not Changeable
    this.last = "Regards,";
    this.name = "Teacher A";

    this.generate = () => {

        var space = "<br />" + "<br />"; //"%0D%0A" + "%0D%0A";
        var space2 = "%0D%0A" + "%0D%0A";
        this.application = "Application for " + this.intend;

        var line1 = "Dear " + this.receiver + ",";
        var line2 = "Thank you for sharing the opportunity of " + this.job + " in " + this.company + " in Science Park Career Expo this afternoon. Among all the job opportunities, I am most interested in the " + this.intend + " (Front-End).";
        var line3 = this.strong + ". " + this.hackathon;
        var line4 = " " + this.resume;
        var line5 = this.last + space + this.name;
        var line6 = this.event;

        this.content = this.application + space + line1 + space + line2 + space + line3 + space + line4 + space + line5 + space + line6;
        this.content2 = this.application + space2 + line1 + space2 + line2 + space2 + line3 + space2 + line4 + space2 + line5 + space2 + line6;

        this.update(this.content);
    }

    this.update = (e) => {
        document.getElementById("emailDone").innerHTML = e;
    }

    this.sendEmail = () => {
        var link = "mailto:" + this.email + "?subject=" + this.application + "&body=" + this.content2;
        window.open(link);
    }

}

var receiver = "Yang Deng";
var company = "Monash University";
var job = "Internship";
var intend = "Intern";

var Email = new Email(" ", " ", " ");
Email.generate();