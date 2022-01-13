const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     privat: false
};


for ( let i = 0; i < 2; i++) {
     const a = prompt('Один із останніх переглянутих фільмів?', ''),
           b = prompt('На скільки оціните його?', '');

           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
               personalMovieDB.movies[a] = b; 
               console.log('done');
           } else {
                console.log('error');
                i--;
           }
     
}


// while(i < 2) {
//      const a = prompt('Один із останніх переглянутих фільмів?', ''),
//            b = prompt('На скільки оціните його?', '');
//            i++;

//            if(a != null && b != null && a != '' && b != '' & a.length < 50){
//                personalMovieDB.movies[a] = b; 
//                console.log('done');
//            } else {
//                 console.log('Error');
//                 i--;
//            }
// }
// let i = 0;
// do {
//      const a = prompt('Один із останніх переглянутих фільмів?', ''),
//            b = prompt('На скільки оціните його?', '');
//            i++;

//            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//            } else {
//                 console.log('Error');
//                 i--;
//            }
// }
// while(i < 2);

       if( personalMovieDB.count < 10) {
                console.log('Переглянуто доволі мало фільмів');
           } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Ви класичний глядач');
           } else if (personalMovieDB.count >= 30) {
                console.log('Ви кіноман');
           } else {
                console.log('Error');
           }
           
console.log(personalMovieDB);