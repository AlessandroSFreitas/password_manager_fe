import { createStore, Store } from 'vuex';
import type { InjectionKey } from 'vue';
import type { INotification } from '@/interfaces/INotification';
import { NOTIFY } from './mutations-type';

export interface Estado {
    notifications: INotification[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        notifications: []
    },
    mutations: {
        [NOTIFY](state, newNotification: INotification) {
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)

            setTimeout(() => {
                state.notifications = state.notifications.filter(
                    notification => notification.id != newNotification.id
                )
            }, 5000)
        }
    }
})
