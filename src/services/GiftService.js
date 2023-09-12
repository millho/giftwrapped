import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { api } from "./AxiosService"


class GiftService {
    async getGifts() {
        const res = await api.get('gifts')
        AppState.gifts = res.data.map(gift => new Gift(gift))
    }
}

export const giftService = new GiftService