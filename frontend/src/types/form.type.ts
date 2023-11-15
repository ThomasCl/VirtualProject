import { FormTemplateType } from "./formTemplateType"
import { TQuestion } from "./question.type"

export interface TForm{
    id: number
    title: string
    questions: TQuestion[]
    type: FormTemplateType
    study: string
}