const express = require("express");
const router = express.Router();
const { Product } = require('../models');
router.get("/", async (req, res) => {

    let card = []
    if (req.session.card) {
        card = req.session.card
    }

    let cardTotalPrice = 0.0
    card.map(async item => {
        cardTotalPrice += item.totalPrice
    })


    return res.status(200).json({
        products: await Product.findAll(),
        card: {
            items: card,
            totalPrice: cardTotalPrice
        }
    })
})

router.post("/add-to-card", async (req, res) => {

    let product = req.body.product

    let card = []
    if (req.session.card) {
        card = req.session.card
    }
    
    console.log({ card })

    if (card.length > 0) {
        let itemIndex = card.findIndex(item => item.id == product.id)
        if (itemIndex > -1) {
            card[itemIndex].count += product.count
            card[itemIndex].totalPrice = card[itemIndex].count * card[itemIndex].price
        } else {
            card.push({
                ...product,
                totalPrice: product.count * product.price
            })
        }
    } else {
        card.push({
            ...product,
            totalPrice: product.count * product.price
        })
    }

    let cardTotalPrice = 0.0
    card.map(async item => {
        cardTotalPrice += item.totalPrice
    })


    req.session.card = card

    return res.status(200).json({
        card: {
            items: req.session.card,
            totalPrice: cardTotalPrice
        }
    })
})

router.post("/change-count", async (req, res) => {
    let product = req.body.product
    let card = []

    if (req.session.card) {
        card = req.session.card
    }

    if (card.length > 0) {
        let itemIndex = card.findIndex(item => item.id == product.id)
        if (itemIndex > -1) {
            card[itemIndex].count = product.count
            card[itemIndex].totalPrice = card[itemIndex].count * card[itemIndex].price
        }
    }


    let cardTotalPrice = 0.0
    card.map(async item => {
        cardTotalPrice += item.totalPrice
    })

    req.session.card = card

    return res.status(200).json({
        card: {
            items: req.session.card,
            totalPrice: cardTotalPrice
        }
    })

})

router.post("/remove-product", async (req, res) => {

    let product = req.body.product

    let card = []
    if (req.session.card) {
        card = req.session.card
    }

    let productIndex = card.findIndex(item => item.id == product.id)

    if (productIndex > -1) {
        card.splice(productIndex, 1)
        req.session.card = card
    }

    let cardTotalPrice = 0.0
    card.map(async item => {
        cardTotalPrice += item.totalPrice
    })


    req.session.card = card

    return res.status(200).json({
        card: {
            items: req.session.card,
            totalPrice: cardTotalPrice
        }
    })

})

module.exports = router;