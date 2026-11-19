// guide.repository.ts  (bagian data)
//   1. Buat array guides berisi 3 objek {id, title, category}
//   2. findAll: kembalikan seluruh array
//   3. findById(id): cari guide yang id-nya sama, kembalikan hasilnya
//      (objek atau undefined)

const guides = [
    { id: 1, title: "Cara mengosongkan cache HP", category: "HP"},
    { id: 2, title: "Mengatur tinta printer", category: "Printer"},
    { id: 3, title: "Laptop tidak merespons", category: "Laptop"}
];

export const findAll = () => guides;

export const findById = (id: number) => guides.find((g) => g.id == id);
