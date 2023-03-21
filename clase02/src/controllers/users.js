export const getUsers = (req, res) => {
  res.status(404).json('No hay usuarios')
}

export const getUser = (req, res) => {
  res.json('Obtener usuario')
}
