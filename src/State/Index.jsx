import { observable, toJS } from 'mobx';


class State {
    @observable sess = null;
    @observable childNavIndex = 0;
    @observable todoList = [];
    @observable homeMainLeftActive = true;
}

export const stateVar = toJS(new State());
