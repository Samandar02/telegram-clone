export class User {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public image: string,
        public latestMessage: string,
        public latestOnline: Date,
        public isRead: boolean,
        public phoneNumber: string
    ) { }
}
export class Message {
    constructor(
        public id: number,
        public messages:IMessage[]
    ) { }
}
interface IMessage {
    id?: number,
    mode?: number,
    message?: string,
}