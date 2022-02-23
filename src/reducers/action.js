import { USERS } from "./users";
export function setUser(payload){
return{
    type:USERS,payload
}
}