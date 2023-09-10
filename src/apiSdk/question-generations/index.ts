import axios from 'axios';
import queryString from 'query-string';
import { QuestionGenerationInterface, QuestionGenerationGetQueryInterface } from 'interfaces/question-generation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQuestionGenerations = async (
  query?: QuestionGenerationGetQueryInterface,
): Promise<PaginatedInterface<QuestionGenerationInterface>> => {
  const response = await axios.get('/api/question-generations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createQuestionGeneration = async (questionGeneration: QuestionGenerationInterface) => {
  const response = await axios.post('/api/question-generations', questionGeneration);
  return response.data;
};

export const updateQuestionGenerationById = async (id: string, questionGeneration: QuestionGenerationInterface) => {
  const response = await axios.put(`/api/question-generations/${id}`, questionGeneration);
  return response.data;
};

export const getQuestionGenerationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/question-generations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteQuestionGenerationById = async (id: string) => {
  const response = await axios.delete(`/api/question-generations/${id}`);
  return response.data;
};
