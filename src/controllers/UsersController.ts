import User from 'entities/User';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const usersRepository = getRepository(User);

    const checkIfUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkIfUserExists) return res.status(400).json({ error: `User with email: ${email} already exists` });

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return res.json(user);
  }
}
