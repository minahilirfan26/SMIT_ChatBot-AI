let list = document.getElementById("list");
let textInput = document.getElementById("textInput");
let sendBtn = document.getElementById("sendBtn");
let typing = document.getElementById("typing");
let deleteAll = document.getElementById("deleteAll")
let threeDots = document.getElementById("para")

let fullName = '';
let selectCourse = '';
let nic = '';
let gender = "";
threeDots.addEventListener("click", ()=>{
    deleteAll.style.display = "block"
})
deleteAll.addEventListener("click", ()=>{
    list.innerHTML = "";
    deleteAll.style.display = "none"
})
sendBtn.addEventListener("click", () => {
    let inputValue = textInput.value.trim(); // Trim the input value to remove leading/trailing spaces
    
    if (inputValue === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter the value!"
        });
    } else {
        list.innerHTML += `<div class="rightbox"><li class="rightside">${inputValue} <p>${moment().format('LT')}</p></li></div>`;
        textInput.value = '';
        typing.style.display = "block";

        if (["hi", "hello", "helo", "hey", "oye", "moye"].includes(inputValue.toLowerCase())) {
            setTimeout(() => {
                list.innerHTML += `<div class="leftbox"><li class="leftside"><img class="img" src="./smit.jpg" alt=""> Hello<p>${moment().format('LT')}</p></li></div>`;
            }, 2000);
            setTimeout(() => {
                list.innerHTML += `<div class="leftbox"><li class="leftside"><img class="img" src="./smit.jpg" alt=""> How are you? <p>${moment().format('LT')}</p></li></div>`;
                typing.style.display = "none";
            }, 4000);
        } else if (["assalam-o-alikum", "assalamoalikum", "assalam o alikum", "wsalam", "w/salam", "w/salm", "w/slam", "w/slm", "w/s", "w.salam"].includes(inputValue.toLowerCase())) {
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt=""> W/Salam <p>${moment().format('LT')}</p></li>`;
            }, 2000);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">How are you? <p>${moment().format('LT')}</p></li>`;
                typing.style.display = "none";
            }, 4000);
        } else if (["good","i am good","i am good hru", "i am good how's you","i am good how are you", "i am good how's u","am good","i'm good & how's you", "m good you","am good you","i'm good you", "m good you", "gud", "m gud", "m gud", "i am gud","i am gud hru", "i am gud how's you","i am gud how are you", "i am gud how's u","am good","i'm gud & how's you", "m good you","am gud you","i'm gud you","m gud you", "great","i am great","i am great hru", "i am great how's you","i am great how are you", "i am great how's u","am great","i'm great & how's you", "m great you","am great you","i'm great you", "m great you", "fine", "f9", "fit", "blkul theek","m theek ap sunyn", "mein thik", "thik hu", "thik", "thik nhi hu", "blkul thik nhi", "alhamdulillah", "allah ka shukr hai", "allah ka shukr ha", "allah ka karam hai", "fantastic", "thek", "theek"].includes(inputValue.toLowerCase())) {
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"> <img class="img" src="./smit.jpg" alt=""> Oh Great, Please let me know how can I help you <p>${moment().format('LT')}</p></li>`;
                typing.style.display = "none";
            }, 2000);
        } else if (["i want admission", "i want to get admission","i want to get admission in smit", "i want to take admission" , "i want to take admission smit", "i want enroll myself","i want enroll myself in smit", "can i get admission","can i get admission in smit", "can i take admission","can i take admission in smit","i want registration", "i want to registrated myself"].includes(inputValue.toLowerCase())) {
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Sure, in which course do you want to enroll?<p>${moment().format('LT')}</p></li>`;
            }, 2000);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Here, we have some courses:</br>
                    &nbsp;&nbsp; 1-Graphic Designing</br>
                    &nbsp;&nbsp; 2-Web & MobApp Development</br>
                    &nbsp;&nbsp; 3-Flutter App Development</br>
                    &nbsp;&nbsp; 4-Python Programming</br>
                    <p>${moment().format('LT')}</p></li>`;
            }, 4000);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Please select any one course you want to enroll in.<p>${moment().format('LT')}</p></li>`;
                typing.style.display = "none";
            }, 6000)
        }
    //     } else if (["graphic desiging course duration","graphic desiging duration","graphic desiging course ki duration","graphic desiging ki duration", "graphic desiging duration","duration of graphic desiging","duration of graphic desiging course","graphic course duration","graphic course ki duration", "graphic duration","duration of graphic","duration of graphic course"].indexOf(inputValue.toLowerCase()) ) {
    //         setTimeout(() => {
    //             list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Duration of Graphic Desiging Course is 06 Months<p>${moment().format('LT')}</p></li>`;
    //             typing.style.display = "none"
    //         }, 2000);
        
    // }
    // else if ([
    //     "python programming course duration",
    //     "python programming duration",
    //     "python programming course ki duration",
    //     "python programming ki duration",
    //     "duration of python programming",
    //     "python course ki duration",
    //     "python duration",
    //     "duration of python"
    // ].indexOf(inputValue.toLowerCase())) {
    //     setTimeout(() => {
    //         list.innerHTML += `<li class="leftside"> <img class="img" src="./smit.jpg" alt=""> Duration of Python Programming Course is 06 Months <p>${moment().format('LT')}</p></li>`;
    //         typing.style.display = "none";
    //     }, 2000);
    // }

    else if (["ok","oky","oka","okys","k","okay","alright","thik hgya","thik h", "thik hai", "theek hai","theek h","oky hogya","set hai","sai hai", "hm","hmm"].includes(inputValue.toLowerCase())) {
        setTimeout(() => {
            list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Great! If you need any further assistance please let me know<p>${moment().format('LT')}</p></li>`;
            typing.style.display = "none"
        }, 2000);
    }else if (["ok thanks","oky thank you","ok thank you","oky thanks","k thanks","okay thank you","alright thank you","thik hgya shukriya","thik h shukriya", "thik hai shukriya", "theek hai shukriya","theek h shukriya","oky thankyou","set hai shukriya","sai hai shukriya", "hm thanks","hmm thanks"].includes(inputValue.toLowerCase())) {
        setTimeout(() => {
            list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">You're welcome! If you have any more questions or need further assistance, feel free to ask. Have a great day!<p>${moment().format('LT')}</p></li>`;
            typing.style.display = "none"
        }, 2000);
    } 
    // else if ([
    //     "Web&mob app development course duration",
    //     "Web & mob app development duration",
    //     "Web&mobApp development course ki duration",
    //     "Web&mobApp development ki duration",
    //     "duration of Web&mobApp development",
    //     "Web development course ki duration",
    //     "Web development duration",
    //     "duration of Web development"
    // ].includes(inputValue.toLowerCase())) {
    //     setTimeout(() => {
    //         list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Duration of Web&mobApp Development Course is 12 Months<p>${moment().format('LT')}</p></li>`;
    //         typing.style.display = "none"
    //     }, 2000);
    // }

        else if (!selectCourse) {
            selectCourse = inputValue;
            console.log("Course: " + selectCourse);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Great! Now please give us some personal information.<p>${moment().format('LT')}</p></li>`;
            }, 2000);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Tell me your Full Name.<p>${moment().format('LT')}</p></li>`;
                typing.style.display = "none";
            }, 4000);
        } else if (!fullName) {
            fullName = inputValue;
            console.log("Full Name: " + fullName);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Your NIC No?<p>${moment().format('LT')}</p></li>`;
                typing.style.display = "none";
            }, 2000);
        } else if (!nic) {
            nic = inputValue;
            console.log("NIC: " + nic);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Your Gender?<p>${moment().format('LT')}</p></li>`;
                typing.style.display = "none";
            }, 2000);
        } else if (!gender) {
            gender = inputValue;
            console.log("Gender: " + gender);
            setTimeout(() => {
                list.innerHTML += `<li class="leftside"><img class="img" src="./smit.jpg" alt="">Thank you for your registration, please download your ID card & Print It.<p>${moment().format('LT')}</p></li>`;
            }, 2000);
            setTimeout(() => {
                let rollNum = Math.floor(Math.random() * 1000000);
                const idCardHTML = `
                    <div class="id-card">
                        <h1>SMIT</h1>
                        <h3>Student ID Card</h3>
                        <ul>
                            <li>FullName: ${fullName}</li>
                            <li>NIC: ${nic}</li>
                            <li>Course: ${selectCourse} (${gender})</li>
                            <li>Roll No: ${rollNum}</li>
                        </ul>
                    </div>
                `;
                list.innerHTML += `<li class="leftside">${idCardHTML}</li>`;
                typing.style.display = "none";
            }, 4000);
        } 
    }
});
