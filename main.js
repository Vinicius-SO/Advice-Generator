const body = document.getElementsByTagName('body')
const title = document.querySelector('.title')
const advice = document.querySelector('.advice')

function getRandom (max){
    return Math.floor(Math.random() * max + 1)
}

 async function getAdvice(){
    let random =  getRandom(224);
    const infos = await fetch(`https://api.adviceslip.com/advice/${random}`)
    const data = await infos.json()

    title.innerHTML = `advice #${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`
    console.log(data.slip.id)
}