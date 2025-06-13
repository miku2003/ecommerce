import { MMKV } from 'react-native-mmkv'

export const tokenStorage = new MMKV({
    id: 'token-storage',
    encryptionKey: "479494ad9a1c961a6eab2e921ad6c1b52a7473f52d78e226bafef0c16bd31fe0"
})

export const storage = new MMKV({
    id: 'my-app-storage',
    encryptionKey: "6c1558500ef3b575f05d6a0cea11250f02b86c6ee107336375f81565151caa6a"
})

export const mmkvStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value)
    },
    getItem: (key: string) => {
        const value = storage.getString(key)
        return value ?? null;
    },
    removeItem: (key: string) => {
        storage.delete(key)
    }
}