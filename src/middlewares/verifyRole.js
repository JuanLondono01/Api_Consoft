function verifyRole(allowedRoles) {
    return(req, res, next)=> {
        const userRole = req.user.rol.nombreRol;
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({message: 'Access denied'})
        }

        next();
    }
}

export default verifyRole;