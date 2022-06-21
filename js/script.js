let numberOfFilms;

function start(){
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
};
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms(){
	for(let i=0; i<2; i++){
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if(a != null && b != null && a !='' && b !='' && a.length < 50){
		personalMovieDB.movies[a] = b;
		console.log('done');
		} else {
			i--;
			console.log('error');
		}
	}
};
rememberMyFilms();


function detectPersonalLevel(){
	if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
		} else if(personalMovieDB.count >=10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
		} else {
	console.log("Произошла ошибка");
		}
};
detectPersonalLevel();

function showMyDB(hidden){
	if (!hidden){
		console.log(personalMovieDB);
	}
}; 
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
	for (let i = 1; i <= 3; i++){
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
};
writeYourGenres();






// switch(num){
// 	case 49:
// 		console.log('Неверно');
// 	break;
// 	case 100:
// 		console.log('Неверно');
// 	break;
// 	case 50:
// 		console.log('В точку!');
// 	break;
// 	default:
// 		console.log('Не в этот раз!');
// 	break;
// };


// let i=0;
// do {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');

// 	if(a != null && b != null && a !='' && b !='' && a.length < 50){
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	i++
// 	}
// }
// while (i<2);

// let i=0;
// while(i<2){
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');

// 	if(a != null && b != null && a !='' && b !='' && a.length < 50){
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 		i++;
// 	};
// };

// let num = 20;
// function showFirstMessage(text){
// 	console.log(text);
// 	num = 10;
// }
// showFirstMessage('Hello World!');
// console.log(num);

// // function calc (a, b){
// // 	return (a + b);
// // };
// // console.log(calc(4, 3));

// function ret(){ 
// 	let num = 50;
// 	return num;
// };
// console.log(ret());

// const logger = function(){
// 	console.log('Hello!');
// };
// logger();

// const calc = (a, b) => a + b;


// const str = 'teSt';

// // console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';
// console.log(logg.slice(2, 8));  //старт, начало

// console.log(logg.substring(2, 8));  //старт, начало

// console.log(logg.substr(2, 8));  //старт, количество символов

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));