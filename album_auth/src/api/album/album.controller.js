const Album = require('./album.model')

const {setError} = require('../../helpers/error/handle.error')

const getAlbums = async (req, res, next) => {
    try {
const albums = await Album.find()
return res.json({
    status: 200,
    message: 'Recovered all Albums',
    data: { albums }
})
    } catch (error) {
        return next(setError(500, 'Fail to recover albums'))
    }
}

const postAlbum = async (req, res, next) => {
    try {
        const newAlbum = new Album(req.body)
        const newAlbumInDB = await newAlbum.save()

        return res.json({
            status: 201,
            message: 'Created Album',
            data: { newAlbumInDB }
        })
    } catch (error) {

    }
}
module.exports = { getAlbums, postAlbum }