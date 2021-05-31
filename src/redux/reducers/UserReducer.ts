import { IUser } from "../../entities/User";

interface IUserReducerAction {
  type: string;
  user: IUser|null;
}

const set = (state = null, action: IUserReducerAction) => {
  switch (action.type) {
    case 'set': return action.user;
    default: return state;
  }
}

export default set;