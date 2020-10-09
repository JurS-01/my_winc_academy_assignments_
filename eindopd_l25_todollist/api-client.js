const user = "jurian";
const base_endpoint = " https://wincacademydatabase.firebaseio.com";

export const getTasks = async () => {
    // https://wincacademydatabase.firebaseio.com/jurian/tasks.json
    const tasksByEndpoint = `${base_endpoint}/${user}/tasks.json`;
    try {
        const res = await fetch(tasksByEndpoint, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export const addTaskToServer = async (taskDescription) => {
    // https://wincacademydatabase.firebaseio.com/jurian/tasks.json
    const tasksByEndpoint = `${base_endpoint}/${user}/tasks.json`;
    try {
        const res = await fetch(tasksByEndpoint, {
            "method": "POST",
            "headers": {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: `{\r\n    \"description\": \"${taskDescription}\",\r\n    \"done\": \"false\"\r\n}`
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export const deleteTaskFromServer = async (id) => {
    // https://wincacademydatabase.firebaseio.com/jurian/tasks/-MIyNFQ6TNaSnwcUjkkT.json
    const tasksByEndpoint = `${base_endpoint}/${user}/tasks/${id}.json`;
    try {
        const res = await fetch(tasksByEndpoint, {
            "method": "DELETE",
            "headers": {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export const changeTasks = async (id, status, description) => {
    // https://wincacademydatabase.firebaseio.com/jurian/tasks/-MJ2F7Dt_fDSev09Zvd8.json
    const tasksByEndpoint = `${base_endpoint}/${user}/tasks/${id}.json`;
    try {
        const res = await fetch(tasksByEndpoint, {
            "method": "PUT",
            "headers": {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: `{\r\n    \"description\": \"${description}\",\r\n    \"done\": \"${status}\"\r\n}`
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}



// export const changeDescription = async (id, status, description) => {
//     // https://wincacademydatabase.firebaseio.com/jurian/tasks/-MJ2F7Dt_fDSev09Zvd8.json
//     const tasksByEndpoint = `${base_endpoint}/${user}/tasks/${id}.json`;
//     try {
//         const res = await fetch(tasksByEndpoint, {
//             "method": "PUT",
//             "headers": {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: `{\r\n    \"description\": \"${description}\",\r\n    \"done\": \"${status}\"\r\n}`
//             // body: "{\r\n    \"description\": \"drink smoothie\",\r\n\t\"done\": \"true\"\r\n}"
//         });
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

