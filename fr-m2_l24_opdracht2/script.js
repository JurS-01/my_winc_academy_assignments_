import { getJoke } from './api-client.js'
import { getJokeImg } from './api-client.js'


const setJoke = async () => {
    const data = await getJoke();
    const joke = data.joke;
    const jokeContainer = document.getElementById('joke-container')
    jokeContainer.innerHTML = "";
    jokeContainer.appendChild(document.createTextNode(joke));
    const id = data.id;
    // const setJokeImg = async () => {
    //     const imgData = await getJokeImg(id);
    //     // const img = imgData;
    //     console.log(imgData);
    //     const imgContainer = document.getElementById('img-container')
    //     imgContainer.appendChild(document.createTextNode(imgData));
    // }
    // setJokeImg()
};
// document.getElementsByClassName('joke-btn')[0].addEventListener('click', setJoke)


const setJokeImg = async () => {
    // const imgData = await getJokeImg('FdxHeiqjqzd');
    const imgData = await getJokeImg();
    console.log(imgData);
    // console.log(`<img src="${imgData}">`);
    const imgContainer = document.getElementById('img-container')
    const newImgItem = document.createElement('li');
    newImgItem.innerHTML = imgData
    imgContainer.appendChild(`<img src="${imgData}">`);
    // imgContainer.appendChild(document.createTextNode(`hello world`));
}
document.getElementsByClassName('joke-btn')[0].addEventListener('click', setJokeImg)

// document.getElementsByClassName('joke-btn')[0].addEventListener('click', getJokeImg)

