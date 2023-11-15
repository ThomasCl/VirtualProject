import { QuestionType } from "./questionType"

export interface TQuestion {
    id: number
    question: string
    type: QuestionType
}