//04-Student's grade using switch

//Using terminal input 
function studentScore(score)
{
  
    switch(true)
    {
        case (score<=100 && score >=90):
            return "A";
        case (score<90 && score >=80):
            return "B";
        case (score<80 && score >=70):
            return "C";
        case (score<70 && score >=60):
            return "D";
        case (score<60 && score >=0):
            return "F";
        default:
            return "Invalid";
        }

}

const input = process.argv[2];
const score = parseInt(input, 10);
console.log("Student score " +score+ " is " + "grade "+studentScore(score));