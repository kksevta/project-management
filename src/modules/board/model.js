import { generateUUID } from 'app/utils/generic-collection'
const createBoard = (boardData) => {
    return new Promise((resolve, reject) => {
        let board = {
            id: generateUUID(),
            name: boardData.boardName
        }
        resolve(board)
    })

}
export { createBoard }