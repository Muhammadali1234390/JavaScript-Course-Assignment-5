// Pehle user se marks input lein ge
  
  let sub1 = prompt("Enter marks of Subject 1");
  let sub2 = prompt("Enter marks of Subject 2");
  let sub3 = prompt("Enter marks of Subject 3");

//Phir ham ne *1 karke input ko number mein badal diya

  let m1 = sub1 * 1;
  let m2 = sub2 * 1;
  let m3 = sub3 * 1;

  let total = 300;
  let obtained = m1 + m2 + m3;
  let percent = (obtained / total) * 100;

  let grade = "";
  let remarks = "";

  //yahan pe conditions lagayi hui hain
  if (percent >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percent >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percent >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }

  //AUR yahan pe result show hojaye ga
  alert("Marks Sheet\n" + "Total Marks: " + total + "\n" + "Marks Obtained: " + obtained + "\n" + "Percentage: " + percent + "%\n" + "Grade: " + grade + "\n" + "Remarks: " + remarks);

