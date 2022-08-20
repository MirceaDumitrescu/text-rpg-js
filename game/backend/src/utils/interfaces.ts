export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    key: any;
}

export interface MongoError {
    code?: number;
    codeName?: string;
    errmsg?: string;
    message?: string;
    name?: string;
    stack?: string;
}
