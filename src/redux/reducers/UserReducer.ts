interface ICounterReducerAction {
  type: string;
  user: any;
}
const set = (state = null, action: ICounterReducerAction) => {
  switch (action.type) {
    case 'set': return action.user;
    default: return state;
  }
}

export default set;