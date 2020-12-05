import { Request, Response } from 'express';


let users = [];

const UserController = {
  index(req: Request, res: Response) {
    return res.json(users);
  },

  store(req: Request, res: Response) {
    const newUser = req.body;
    users.push(newUser);
    return res.json(users);
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    users = users.map(user => {
      if(user.id == id) {
        return {
          ...req.body
        }
      }
      return user
    });
    return res.json(users);
  },

  destroy(req: Request, res: Response) {
    const { id } = req.params;
    users = users.filter(user => user.id != id);
    return res.json(users);
  }
}

export default UserController;
