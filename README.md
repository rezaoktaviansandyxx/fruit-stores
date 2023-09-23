# FRUIT STORE- Waktu 360 Menit

## TASK SUMMARY

Tugas seorang admin CMS adalah untuk memasukkan data-data dari informasi yang ada. Terdapat 3 table utama: `Fruits`, `Categories`, dan `Brands` yang akan di masukkan ke dalam sebuah platform web.

Dari ke 3 table memiliki field-field tertentu yang akan di input oleh seorang admin. Buat lah sebuah aplikasi untuk membantu admin tersebut.

## Tasks 1

Buatlah database dengan nama `fruit-store`.

Dan table `Fruits` yang memiliki kolom-kolom sebagai berikut :

| Field | Datatype | Modifiers   |
| ----- | -------- | ----------- |
| id    | SERIAL   | PRIMARY KEY |
| name  | VARCHAR  | NOT NULL    |
| image | VARCHAR  | NOT NULL    |
| price | INT      | NOT NULL    |
| stock | INT      | NOT NULL    |

Buatlah table `Categories` yang memiliki kolom-kolom sebagai berikut :

| Field | Datatype | Modifiers   |
| ----- | -------- | ----------- |
| id    | SERIAL   | PRIMARY KEY |
| name  | VARCHAR  | NOT NULL    |
  
Buatlah table `Brands` yang memiliki kolom-kolom sebagai berikut :

| Field           | Datatype | Modifiers   |
| --------------- | -------- | ----------- |
| id              | SERIAL   | PRIMARY KEY |
| name            | VARCHAR  | NOT NULL    |
| image           | VARCHAR  | NOT NULL    |
| city            | VARCHAR  | NOT NULL    |
| total_employees | INT      | NOT NULL    |

Semua Table di atas akan secara automatic terbuat _createdAt_ dan _updatedAt_ karena menggunakan _Sequelize-CLI_

---
Table d atas punya relasi sebagai berikut:

- Brands memiliki banyak Fruits
- Categories memiliki banyak Fruits
- Fruits hanya punya 1 Brands dan 1 Categories
  
**DAPAT MENAMBAHKAN FIELD DALAM TABLE JIKA DIPERLUKAN**

## Tasks 2

Buatlah routing dengan menggunakan `ExpressJS` agar dapat melakukan CRUD operations dengan detail seperti dibawah:

| Method | Route                  | Keterangan                                                                                |
| ------ | ---------------------- | ----------------------------------------------------------------------------------------- |
| GET    | /                      | Menampilkan home                                                                          |
| GET    | /fruits                | Menampilkan semua fruit yang ada dalam database                                           |
| GET    | /brands                | Menampilkan semua brands yang ada dalam database                                          |
| GET    | /categories            | Menampilkan semua categories yang ada dalam database                                           |
| GET    | /fruits/add            | Menampilkan halaman form untuk menambahkan data fruit                                     |
| POST   | /fruits/add            | Menerima data yang dikirim dari halaman `/fruits/add` untuk melakukan _insertion_         |
| GET    | /brands/add            | Menampilkan halaman form untuk menambahkan data brands                                    |
| POST   | /brands/add            | Menerima data yang dikirim dari halaman `/brands/add` untuk melakukan _insertion_         |
| GET    | /categories/add        | Menampilkan halaman form untuk menambahkan data categories                                |
| POST   | /categories/add        | Menerima data yang dikirim dari halaman `/categories/add` untuk melakukan _insertion_     |
| GET    | /fruits/delete/:id     | Melakukan _delete_ data fruit berdasarkan `id` yang dikirimkan                            |
| GET    | /brands/delete/:id     | Melakukan _delete_ data brands berdasarkan `id` yang dikirimkan                           |
| GET    | /categories/delete/:id | Melakukan _delete_ data categories berdasarkan `id` yang dikirimkan                       |
| GET    | /fruits/update/:id     | Menampilkan halaman form untuk mengubah data fruit dari Id                                |
| POST   | /fruits/update/:id     | Menerima data yang dikirim dari halaman `/fruits/update/:id` untuk melakukan _update_     |
| GET    | /brands/update/:id     | Menampilkan halaman form untuk mengubah data brands dari Id                               |
| POST   | /brands/update/:id     | Menerima data yang dikirim dari halaman `/brands/update/:id` untuk melakukan _update_     |
| GET    | /categories/update/:id | Menampilkan halaman form untuk mengubah data categories dari Id                           |
| POST   | /categories/update/:id | Menerima data yang dikirim dari halaman `/categories/update/:id` untuk melakukan _update_ |

## Tasks 3

Gunakan EJS untuk interface dengan menggunakan CSS dan CSS Framework.

---

> USAHA KERAS TIDAK MENGKHIANATI HASIL

---
