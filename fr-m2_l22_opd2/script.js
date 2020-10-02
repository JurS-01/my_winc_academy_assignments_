const makeHomework = (course, callback) => {
    setTimeout(() => {
        console.log(`I will do my ${course} homework now`);
        callback();
    }, 2000);
}

const homeworkFinished = () => {
    console.log("Look Mommy, I finished my homework");
}

makeHomework('math', homeworkFinished);