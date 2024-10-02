import express from 'express'

export default (request, response, next) => {
    console.log(new Date().toLocaleString())
    next()
}