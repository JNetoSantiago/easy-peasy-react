import { createStore } from 'easy-peasy'

import model from '~/model'

const storeModel = {
    ...model
}

export const store = createStore(storeModel)