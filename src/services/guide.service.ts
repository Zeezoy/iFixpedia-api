import * as guideRepository from "../repositories/guide.repository.js";

export const getAllGuides = () => guideRepository.findAll();

export const getGuideById = (id: number) => guideRepository.findById(id);

export const createguide = (title: string, category: string) => guideRepository.create(title, category);