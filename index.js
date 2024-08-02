const safeConnect = require("safetrade_connect")

const queryify = (data) => {
    let query = ""
    for (let key in data) {
        query += key + "=" + data[key] + "&"
    }
    return query
}

module.exports = class extends safeConnect {
    constructor(apiKey, secret) {
        super(apiKey, secret)
        this.apiKey = apiKey
        this.secret = secret
    }
    
    getSpotAccounts = async () =>
        (await this.request("/trade/account/balances/spot", "GET", {})).data
    
    getOrders = async (data) =>
        (await this.request(`/trade/orders?${queryify(data)}`, "GET", {})).data
}
