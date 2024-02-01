import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    let simpsons = [
        {
            id: 1,
            name: 'Хомер',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2-HkP3k69jgJ03TxLOmFucxRIqbunikcfKq_qLeHgfyMkJV_0_AeKgBCWY0rbKTXP6w&usqp=CAU",
            info:"Гомер Джей Сімпсон (народився 12 травня 1956) [40] — чоловік зі Спрінгфілда. Він є чоловіком Мардж Сімпсон і батьком Барта, Лізи та Меггі Сімпсон. Гомер має надлишкову вагу (як кажуть, 239 фунтів), вінледачий і часто не знає навколишнього світу.",
        },
        {
            id: 2,
            name: 'Барт',
            img: "https://easydrawingguides.com/wp-content/uploads/2019/08/how-to-draw-bart-simpson-featured-image-1200.png",
            info: 'Бартолом’ю ДжоДжо «Барт» Сімпсон (народився 23 лютого або 1 квітня 1980 року)— пустотлива, непокірна, незрозуміла, руйнівна та «потенційно небезпечна» найстарша дитина сімейства Сімпсонів у Сімпсонах.',
        },
        {
            id: 3,
            name: 'Ліза',
            img: "https://e7.pngegg.com/pngimages/853/496/png-clipart-lisa-simpson-homer-simpson-bart-simpson-marge-simpson-maggie-simpson-bart-simpson-lisa-simpson-homer-simpson.png",
            info: 'Ліза Марі Сімпсон (народилася 9 травня 1983) [9] — старша донька та середня дитина родини Сімпсонів і одна з двох тритагоністів (разом з Мардж) серіалу «Сімпсони».',
        },
        {
            id: 4,
            name: 'Мардж',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzfQNig-NnSMui3FIzFr0Ki_OaOlCY2lIONr6wcnU7PaHLM-KDErxlzzBgYsoISoMkSg&usqp=CAU",
            info: "Марджорі (Мардж) Сімпсон (дівоче прізвище — Був'є) — один з головних персонажів анімаційного серіалу Сімпсони, дружина Гомера Сімпсона, мати Ліси та Барта. Домогосподарка, майже весь свій час проводить удома доглядаючи наймолодшу дитину Меґґі, а також Барта, Лісу і чоловіка. Найвідоміша особливість героїні — блакитне волосся зібране у високу зачіску — «вулик».",
        },
        {
            id: 5,
            name: 'Абрахам',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZtHHm7N-crzdS0OWiUso71iudVpUi2ig_A5zuliqQClFFO2FZov_K0eRB148_RDa3yA&usqp=CAU",
            info: "Абрахам (Ейб) Джей Сімпсон (англ. Abraham Jay Simpson) — також відомий як Дідусь Сімпсон — вигаданий персонаж, один з героїв телевізійного мультсеріалу «Сімпсони», якого озвучує Ден Кастелланета. Мешканець спрингфілдського Будинку пристарілих, найстарший в сім'ї та батько головного героя серіалу — Гомера Сімпсона.",
        }
    ]

    return (
        <div>
            {simpsons.map(value => (<Simpson value={value} key={value.id}/>))}
        </div>
    );
};

export default Simpsons;