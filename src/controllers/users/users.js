import { deleteUser } from './deleteUser.js';
import { getUserById } from './getUser.js';
import { getUsers } from './getUsers.js';
import { updateUser } from './updateUser.js';

export const usersController = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}