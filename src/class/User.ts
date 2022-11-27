import { v4 as uuidv4 } from 'uuid';

class User {
    id: string;
    name: string;
    email: string;
    password: string;
    constructor(name: string, email: string, password: string) {
        (this.id = uuidv4()),
            (this.name = name),
            (this.email = email),
            (this.password = password);
    }
}
export default User