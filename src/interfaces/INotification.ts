export enum Notificationtype {
    SUCCESS,
    ERROR,
    WARNING
}

export interface INotification {
    title: String
    text: String
    type: Notificationtype
    id: number
}
