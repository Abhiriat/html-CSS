

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
