# Library API - Primdev Intermediate

Backend API untuk manajemen perpustakaan yang dibangun menggunakan **Express.js**, **Prisma ORM**, dan **PostgreSQL**.

## Fitur Utama

- **Manajemen Buku**: CRUD lengkap (Create, Read, Update, Delete) untuk data buku.
- **Manajemen User**: CRUD lengkap untuk pengguna dengan fitur keamanan.
- **Password Hashing**: Menggunakan `bcrypt` untuk enkripsi password pengguna secara otomatis.
- **Arsitektur Controller**: Kode yang terorganisir dengan pemisahan Route dan Controller.
- **Database Integration**: Menggunakan Prisma client untuk interaksi database yang aman dan efisien.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Keamanan**: Bcrypt (Hashing)
- **Development**: Nodemon

## Menjalankan Project

1. **Clone repository & Install dependencies**
   ```bash
   npm install
   ```

2. **Konfigurasi Database**
   Sesuaikan file `.env` (jika ada) atau pastikan kredensial database di `schema.prisma` benar. Lalu jalankan migrasi:
   ```bash
   npx prisma migrate dev --name init
   ```

3. **Jalankan Project**
   ```bash
   npm run dev
   ```

---

## Endpoint API

### Base URL (Welcome)
- `GET /` - Menampilkan pesan selamat datang.

### Books (Buku)
| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/books` | Mengambil semua daftar buku |
| **GET** | `/books/:id` | Mengambil detail satu buku berdasarkan ID |
| **POST** | `/books` | Menambah buku baru |
| **PUT** | `/books/:id` | Memperbarui data buku berdasarkan ID |
| **DELETE** | `/books/:id` | Menghapus buku dari database |

**Body (POST/PUT):**
```json
{
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "year": 1997
}
```

### Users (Pengguna)
| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/users` | Mengambil semua daftar pengguna |
| **GET** | `/users/:id` | Mengambil detail pengguna berdasarkan ID |
| **POST** | `/users` | Menambah pengguna baru (Password Terenkripsi) |
| **PUT** | `/users/:id` | Memperbarui data pengguna |
| **DELETE** | `/users/:id` | Menghapus pengguna dari database |

**Body (POST/PUT):**
```json
{
  "name": "Danuartha",
  "email": "danu@example.com",
  "password": "securepassword123"
}
```

---

## Struktur Folder
```text
├── controllers/      # Logika aplikasi (Controller)
├── routes/           # Definisi endpoint (Route)
├── prisma/           # Konfigurasi & Schema Database
├── database.js       # Inisialisasi Prisma Client
├── index.js          # Entry point aplikasi
└── package.json      # Dependensi project
```

## Lisensi
Project ini berada di bawah lisensi **MIT**. Dibuat untuk kelas Primdev Intermediate 2026.
