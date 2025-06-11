import { createRole } from './createRole.js';
import { deleteRole } from './deleteRole.js';
import { getRoleById } from './getRole.js';
import { getRoles } from './getRoles.js';
import { updateRole } from './updateRole.js';

export const rolesController = {
    getRoles,
    deleteRole,
    createRole,
    updateRole,
    getRoleById
}