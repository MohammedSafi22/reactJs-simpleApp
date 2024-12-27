export interface IUserData {  
    email : string;
    password : string;
}

export interface IFormInput {
    label: string;
    type: string;
    id: string;
    name: keyof(IUserData);
}