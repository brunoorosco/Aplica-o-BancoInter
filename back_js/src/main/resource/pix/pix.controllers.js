//const PixService = require('./pix.service')

module.exports = class PixController {

    async request(req, res) {
       const pixService = new PixService();

        const { value } = req.body;
        const user = req.user


        const requestKey = await pixService.request(value, user);
        return res.status(200).send({ copyPasteKey: requestKey })
    }

    async pay(req, res) {
        const pixService = new PixService();

        const { key } = req.params;
        const payment = await pixService.pay(key, req.user);

        return res.status(201).send(payment)
    }

    async transactions(req, res) {
       const pixService = new PixService();

       const transactions = await pixService.transactions(req.user);

        return res.status(201).send({ transactions })
    }
}

