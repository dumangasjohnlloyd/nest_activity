import {Injectable} from "@nestjs/common";
import {first} from "rxjs";

@Injectable()
export class UserService{
    async getUsers(){
        return[
            {
                firstname: "lloydie",
                age: "21"
            },
            {
                firstname: "johny",
                age: "22"
            }
        ]
    }
    
}
