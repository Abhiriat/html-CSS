

    let name = "Abhishek Singh";
    let hobbies = ['coding', 'reading', 'travelling'];
    let age = 22;

    if (age >= 18) {
        console.log("You are verified");
    } else {
        console.log("You are not verified");
    }

    for (let i = 0; i < hobbies.length; i++) {
        console.log('Hobby: ' + hobbies[i]);
    }

   
    function changeName() {
        
        let newName = prompt("Enter your new name:");
        if (newName) {
            document.getElementById('nameDisplay').innerText = newName;
            console.log("Name changed to: " + newName);
        } else {
            alert("Name change was canceled.");
        }
    }

    window.onload=()=>{
        alert('Welcome ton my website')
    }

    function addSkill(){
        let skill=prompt("Enter your skill");
        let Experience=prompt("Enter the level (Beginner,Intermediate,Expert:");
        if(skill && Experience){
            const skillstable=document.getElementById("skillsTable");
            let newrow=skillstable.insertRow()
            let skillCell = newrow.insertCell(0);
            let ExperienceCell = newrow.insertCell(1);
            skillCell.innerText = skill;
            ExperienceCell.innerText = Experience;
        }else{
            alert("Skill or Experience cannot find");
        }}
    const projects=[
        {title:"Portfolio website",date:"16.01.2024"},
        {title:"Chat App",date:"28.08.2024"},
        
]
const projectlist=document.getElementById("projectList");
projects.map((project)=>{
    let li =document.createElement("li");
    li.innerText=project.title;
    li.addEventListener("mouseover",()=>{
        alert(`${project.title} was released on ${project.date}`)
    });
    projectlist.appendChild(li)
})
document.getElementById("contactForm").addEventListener("submit", (event) => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
    }
});