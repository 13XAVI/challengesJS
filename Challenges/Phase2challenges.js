/* 1.Asynchronous Js & Error Handling*/
setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
}

setStudentAgeApi({ name: "Eric" }, 25)
    .then(student => {
        console.log(" Settting Student's age  :", student.age);
        console.log("Updated student object:", student);
    })
    .catch(error => {
        console.error("Error:", error);
    });

setStudentAgeApi({ name: "Eric" }, -10)
    .then(student => {
        console.log("Settting Student's age:", student.age);
        console.log("Updated student object:", student);
    })
    .catch(error => {
        console.error("Error:", error);
});


/*2.Practicing what you have learnt*/

const MyOwnApi = async (families) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            for (let family of families) {
                family.totalNumberofFamilyMembers = 3;

                if (family.fatherName.toLowerCase() === 'yves') {
                    throw new Error("Yves is not an allowed dad in 2022");
                }
            }
    
            return families; 
        } catch (error) {
            throw error; 
        }
    }
    
    const families = [
        { fatherName: "Maestro", motherName: "Sandra", childrenNumber: 3 },
        { fatherName: "John", motherName: "Emily", childrenNumber: 2 },
        { fatherName: "Yves", motherName: "Sophie", childrenNumber: 1 }
    ];
    
    (async () => {
        try {
            const updatedFamilies = await MyOwnApi(families);
            console.log("Updated families:", updatedFamilies);
        } catch (error) {
            console.error("Error:", error.message);
        }
    })();
    