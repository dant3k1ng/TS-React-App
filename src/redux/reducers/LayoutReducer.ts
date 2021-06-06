import { Layout } from "../../helpers/Layout";

interface ILayoutReducerAction {
  type: string;
  layout: Layout;
}

const set = (state = Layout.DEFAULT, action: ILayoutReducerAction) => {
  switch (action.type) {
    case 'setLayout': return action.layout;
    default: return state;
  }
}

export default set;