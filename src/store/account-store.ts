import { create } from 'zustand'

interface AccountStoreProps {
   userData: object | undefined,
   setUserData: (data: object | any) => void
}


export const useAccountStore = create<AccountStoreProps>()(set => ({
   userData: {},
   setUserData: (data) => set(() => ({ userData: data }))
}))