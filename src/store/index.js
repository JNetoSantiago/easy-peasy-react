import { createStore } from 'easy-peasy'

import model from './../model'

const model = {
    ...model
}

export const store = createStore(model)