import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

export const dataFormatter = new Intl.DateTimeFormat('pt-BR')


const formattedDate = new Date("2024-04-03T18:59:58Z")
 
export const updatedAtDateFormatted = format(formattedDate, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })
export const updatedAtDateRelativeToNow = formatDistanceToNow(formattedDate, { locale: ptBR, addSuffix: true })
