  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Enter a day of the week: ', day => {
    day = day.toLowerCase();

   switch (day) {
     case 'Monday' :
       console.log('your task for monday is: Finish your assignments');
       break;
     case ' tuesday':
       console.log('your task for Tuesday is: Attend team meeting');
       break;
     case 'wednesday':
       console.log('your task for Wednesday is: Work on project X');
       break;
     case 'thursday':
       console.lis:('your task for thursday is: Review project Y');
       break;
     case 'friday':
       console.log('your task for Friday is: Submit project Z');
       break;
     case 'saturday':
       console.log('your task for Saturday is: Review week\'s progress');
       break;
     case 'sunday':
       console.log('your task for sunday is: Plan for next week');
       break;
     default:
       console.log('Invalid day. Please try again.');
  }

  readline.close();
});
  
       
