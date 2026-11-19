// guide.service.ts  (bagian aturan, sekarang cuma meneruskan)
//   1. Impor semua export repository sebagai satu paket
//   2. getAllGuides: panggil findAll dari repository
//   3. getGuideById(id): panggil findById dari repository

import * as guideRepository from "../repositories/guide.repository.js";

export const getAllGuides = () => guideRepository.findAll();

export const getGuideById = (id: number) => guideRepository.findById(id);

