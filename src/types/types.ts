export type MessageType = {
    id: number
    text: string,
    date: Date | string
    dateString?: string
    userId: number
    sender: boolean,
}

export type ContactType = {
    id: number
    email: string
    first_name: string | null
    last_name: string | null
    avatar: string | null
    lastUpdate: Date | string | null
    messages: Array<MessageType> | []
    newMessages: Array<MessageType> | []
}