// Databases and SQL

// Database is a collection of information that is organized so that it can be easily accessed, managed, and updated.
// Prototypal database system developed by IBM in 1974, System R, became SQL, which has dominated since then.
// Database Management System
//  // Table, Row, Column, Field
// Data Integrity

// SQL - Structured Query Language
// Set of commands and procedures that allow us to store, mainpulate, and retrieve data in a relational database.

/////// 5 ASPECTS OF DATABASES AND SQL THAT ARE IMPORTANT /////// 
// 1. Satisfying data normalization so that data can be accessed and manipulated long-term based on a set of rules.
// 2. Unique Naming
// 3. Primary and Foreign Keys
// 4. One to One or One to Many or Many to Many
// 5. Conceptual Model, Logical Model, Physical Model


////// 5 QUESTIONS ON DATABASES AND SQL ///////
// 1. Whats the difference between a database and a spreadsheet?
// 2. Why are there different forms of SQL?
// 3. Can you cross between different versions of SQL? like Mysql or sqlite?
// 4. Can your keys be mis-aligned but your data normalization fine?
// 5. What are some of the best databases and what makes them better than others?

// Practice Exercise
// 3. SELECT * FROM songs Where ((id > 50 AND id %2 == 0) or (id < 10 AND id %2 == 1)); 
// insert into favorite 
// (
//   userid,
//   createdat
//   )
//   VALUES
//   (
//     2,
//     CURRENT_DATE
//     );

// UPDATE Favorite 
// SET SongID = songs.id,
// 	GenreID = genres.id,
// 	ArtistID = artists.id,
//     AlbumID = album.id,
//     UpdatedAt = CURRENT_TIMESTAMP
// from songs, albums, artists, genres;



// MASTERS 
// POOL
// Spieth-25
// DJ-4, JT-10, Rory-4, Brooks-2, Bryson-3, X-2, Morikawa-3
// Reed-14, Simpson-12, Casey-4, Day-3, Westwood-2, Niemann-7
// Zalatoris-4, Louis-7, Conners-5
// Leishman-4, Kokrak-5, SiWoo-1
// Palmer-6, Munoz-7, Perez-4, Lanto-4, Wallace-4, Jones-4
// 

// Ownership
// SPIETH, JT,
// DJ, Rahm, Dechambeau
// WEBB, NIEMANN, REED, CONNERS, OOUST, PALMER, KOKRAK
// Zalatoris, Casey, Ancer, Xander, Berger, Im, Horschel, Fitzpatrick, Cantlay, Finau, Mcilroy, Sergio, Smith, Morikawa, Scott

function valBetweenAlt(val, min, max) {
    if (val > min) {
        if (val < max) {
            return val;
        } else return max;
    } else return min;
}

console.log(valBetweenAlt(7, 1, 5));