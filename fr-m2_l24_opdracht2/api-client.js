export const getJoke = async () => {
    const jokeUrl = `https://icanhazdadjoke.com/`;
    try {
        const res = await fetch(jokeUrl, {
            method: "GET",
            'headers': {
                'Accept': 'application/json',
            }
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export const getJokeImg = async imgId => {
    // https://icanhazdadjoke.com/j/<joke_id>.png
    // const imgUrl = `https://icanhazdadjoke.com/j/${imgId}.png`;
    const imgUrl = `https://icanhazdadjoke.com/j/FdxHeiqjqzd.png`;
    // const imgUrl = `https://icanhazdadjoke.com/j/<joke_id>.png`;
    try {
        const res = await fetch(imgUrl, {
            method: "GET",
            'headers': {
                'Accept': 'application/json',
            }
        });
        return await res.text();
    } catch (error) {
        console.log(error);
    }
};

        // const inToText = (a) => {
        //     a.text()
        //     console.log(text);
        // }
        // inToText(res);
        // text => console.log(text);
