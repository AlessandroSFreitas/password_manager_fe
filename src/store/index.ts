import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import type { InjectionKey } from 'vue';
import { Notificationtype, type INotification } from '@/interfaces/INotification';

interface Estado {
    notifications: INotification[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        notifications: [
            {
                id: 1,
                text: 'Uma notificacao de sucesso.',
                title: 'sucesso',
                type: Notificationtype.SUCCESS
            },
            {
                id: 2,
                text: 'Uma notificacao de erro.',
                title: 'erro',
                type: Notificationtype.ERROR
            },
            {
                id: 3,
                text: 'Uma notificacao de aviso.',
                title: 'aviso',
                type: Notificationtype.WARNING
            },
        ]
    },
    mutations: {

    }
})
