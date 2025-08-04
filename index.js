// function sapa(nama) {
//     console.log("Halo, " + nama + "!");
// }

// sapa("Joy");
// sapa("Seulgi");

// function tambah(a, b) {
//     return a + b;
// }

// let hasil = tambah(5, 3);
// console.log("Hasil: " + hasil);

// let car = {
//     name: "Flat",
//     model: 500,
//     weight: "30kg",
//     color: "yellow",

//     start: function() {
//         console.log("Mobil dinyalakan.");
//     },
//     drive: function() {
//         console.log("Mobil berjalan");
//     },
//     brake: function() {
//         console.log("Mobil mengerem");
//     },
//     stop: function() {
//         console.log("Mobil berhenti");
//     },
// };

// console.log(car.name);
// console.log(car.color);

// car.start();
// car.drive();

// let bike = {
//     merk: "polygon",
//     jumgear: 50,
//     color: "yellow",

//     start: function() {
//         console.log("sepeda mulai dikayuh.")
//     },
//     stop: function() {
//         console.log("sepeda mengerem.")
//     },
    
// };

// console.log(bike.merk);
// console.log(bike.jumgear);
// console.log(bike.color);


// bike.start();
// bike.stop();


// function Car(name, model, weight, color) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.color = color;

//     this.start = function() {
//         console.log(`${this.name} dinyalakan.`);
//     };
//     this.drive = function() {
//         console.log(`${this.name} sedang berjalan.`);
//     };
// }

// let car1 = new Car("Toyota", 2020, "blue", "1000kg");
// let car2 = new Car("Honda", 2021, "red", "950kg");

// car1.start();
// car2.drive();


// class Car {
//     constructor(name, model, color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} dinyalakan.`);
//     }

//     drive() {
//         console.log(`${this.name} berjalan.`);
//     }
// }

// let car1 = new Car("Toyota", 2021, "blue");
// car1.start();


// class Sepeda {
//   constructor(merk, jumlah_gigi, warna_sepeda) {
//     this.merk = merk;
//     this.jumlah_gigi = jumlah_gigi;
//     this.warna_sepeda = warna_sepeda;
//   }

//   start() { 
//     console.log("Sepeda digoes.");
//   }

//   brake() {
//     console.log("Sepeda mengerem.");
//   }

//   stop() {
//     console.log("Sepeda berhenti.");
//   }
// }

// let sepeda = new Sepeda("Wimcycle", 7, "Hitam");
// let sepeda2 = new Sepeda("Pacific", 10, "Hijau");

// console.log("Merk sepeda: " + sepeda.merk);
// console.log("Merk sepeda: " + sepeda2.merk);
// sepeda.start();  
// sepeda2.brake();


class Student {
    constructor(nama, nim, jurusan, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.nama}, NIM: ${this.nim}, jurusan ${this.jurusan}, angkatan ${this.angkatan}.`);
    }

    isSenior() {
        if (this.angkatan < 2025) {
            console.log(`${this.nama} adalah mahasiswa senior.`);
        } else {
            console.log(`${this.nama} adalah mahasiswa baru.`);
        }
    }

    displayInfo() {
        console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}`);
    }
}

let student1 = new Student("Wisnu", "123456", "Sistem Informasi", 2020);
let student2 = new Student("Aprilianto", "654321", "Teknik Informatika", 2025);

student1.introduce();
student2.introduce();

student1.isSenior();
student2.isSenior();

student1.displayInfo();
student2.displayInfo();