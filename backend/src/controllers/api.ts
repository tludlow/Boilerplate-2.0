import { Request, Response } from 'express'

/**
 * Ping route to check api is working
 * @route GET /ping
 */
export const Ping = (req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        time: new Date(),
    })
}

export const Restaurants = (req: Request, res: Response) => {
    res.status(200).send({
        restaurants: [
            { name: 'McDonalds', distance: 12 },
            { name: 'Burger King', distance: 4 },
            { name: 'KFC', distance: 20 },
        ],
    })
}

/**
 * 404 Route
 * @route GET/*
 */

export const FourOFour = (req: Request, res: Response) => {
    res.status(404).send({
        status: 'not found',
    })
}
