const AlbumRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')

const { getAlbums, postAlbum } = require('./album.controller')

AlbumRoutes.get('/', [isAuth], getAlbums)
AlbumRoutes.post('/', [isAuth], postAlbum)

module.exports = AlbumRoutes