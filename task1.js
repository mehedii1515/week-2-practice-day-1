const Grade = (mark) => {
  if (mark >= 80 && mark < 100)
     {
    console.log("Your result A+.");
   } 
  else if (mark >= 70 && mark < 80)
     {
    console.log("Your result is A");
  } 
  else if (mark >= 60 && mark < 70) 
    {
    console.log("Your result is AB");
  }
   else if (mark >= 50 && mark < 60)
     {
    console.log("Your result is B");
  } 
  else if (mark >= 40 && mark < 50) 
    {
    console.log("Your result is C");
  } 
  else if (mark >= 33 && mark < 40) 
    {
    console.log("Your result is D");
  } 
  else if (mark < 33) 
    {
    console.log("Failed!");
  }
};

Grade(40);
