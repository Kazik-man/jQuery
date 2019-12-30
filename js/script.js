// 1. Создать страницу, которая выводит нумерованный список песен:

let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN",
    },
    
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY",    
    },

    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD",
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER",
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER",
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK",
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU",
    },
    
    {
     author: "METALLICA",    
     song:"ENTER SANDMAN",
    }
]

musicInfo = (playList) => {
    if(playList) {
        let list = ``;

        for(let song of playList) {
            list += `<ul>`;
            list += `<audio class="player" controls></audio>`;
            list += `<li class="musicList">`;
            list += `<div class="musicList__author"><span>Author: </span> ${song.author}</div>`;
            list += `<div class="musicList__song"><span>Song: </span> ${song.song}<br></div>`;
            list += `</li>`;
            list += `</ul>`;
        }
        document.getElementById('musicList').innerHTML = list;
    }
}
musicInfo(playList);



// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

// let openText = document.getElementById('open');
// let closeText = document.getElementById('close');
// openText.onclick = function() {
//     document.querySelector('.text').style.display = 'block';
// }
// closeText.onclick = function() {
//     document.querySelector('.text').style.display = 'none';
// }




// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.


// nextColor = () => {
//     let current = document.querySelector('.active');
//     let next = current.nextElementSibling;
//     let list = document.querySelectorAll('li');
//     for (let li of list) {
//         li.classList.remove('active');
//     }

//     if(next) {
//         next.classList.add('active');
//     } else {
//         list[0].classList.add('active');
//     }
// }

