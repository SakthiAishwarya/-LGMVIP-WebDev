const data = [
    {
        name: "arjun",
        Algebra_and_number_theory :"A+",
        Programming_in_C          :"O",
        Data_Structures           :"A+",
        Python                    :"O",
        Number                    :"745874521",
        Percentage                : "9.5CGPA"
    },
    {
        name: "Amirtha",
        Algebra_and_number_theory :"A+",
        Programming_in_C          :"O",
        Data_Structures           :"O",
        Python                    :"A+",
        Number                    :"745874521",
        Percentage                : "9.8CGPA"
    },
    {
        name: "Priya",
        Algebra_and_number_theory :"A+",
        Programming_in_C          :"O",
        Data_Structures           :"A",
        Python                    :"A",
        Number                    :"745874521",
        Percentage                : "8.9CGPA"
    },
    {
        name: "ram",
        Algebra_and_number_theory :"O",
        Programming_in_C          :"O",
        Data_Structures           :"O",
        Python                    :"O",
        Number                    :"745874521",
        Percentage                : "10CGPA"

    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "Algebra and Number theory : " + data[i].Algebra_and_number_theory +"</h3>" + "<h3>" + "Programming in C : " 
            + data[i].Programming_in_C +"</h3>" +"<h3>" + "Data Structures : " + data[i].Data_Structures +"</h3>"+"<h3>" + "Python : " + data[i].Python +"</h3>"+"<h3>"
            "CGPA : " +data[i].Percentage + "</h3>"
            return;
        }
    
    }
    results.innerHTML = "<h3>" + "Information is not available!!!" + "</h3>" 

}) 