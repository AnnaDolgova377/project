const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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
};


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

if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >=10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Вы киноман");
}

console.log(personalMovieDB);



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

