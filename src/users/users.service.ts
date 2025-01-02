import { Injectable } from '@nestjs/common';
import { Res } from 'src/entities/res.interface';
import { Users } from 'src/entities/users.interface';

let usersDummy = [
  {
    id: 1,
    name: 'Reza',
  },
  {
    id: 2,
    name: 'Andi',
  },
  {
    id: 3,
    name: 'Siti',
  },
  {
    id: 4,
    name: 'Budi',
  },
  {
    id: 5,
    name: 'Dewi',
  },
  {
    id: 6,
    name: 'Hendra',
  },
  {
    id: 7,
    name: 'Rina',
  },
  {
    id: 8,
    name: 'Arif',
  },
  {
    id: 9,
    name: 'Tina',
  },
  {
    id: 10,
    name: 'Rizky',
  },
];
@Injectable()
export class UsersService {
  getUsers(): Res<Users> {
    return {
      meta: {
        message: 'message',
        status: 'success',
      },
      data: usersDummy,
    };
  }

  async getUserById(id: number): Promise<Res<Users>> {
    const user = await usersDummy.find((u) => u.id == id);
    return {
      meta: {
        message: 'message',
        status: 'success',
      },
      data: [user],
    };
  }

  async createUser(user: Users): Promise<Res<Users>> {
    await usersDummy.push(user);
    return {
      meta: {
        message: 'message',
        status: 'success',
      },
      data: usersDummy,
    };
  }

  async updateUser(user: Users, id: number): Promise<Res<Users>> {
    const updatedUser = await usersDummy.map((u) => {
      if (u.id == id) {
        return user;
      }
      return u;
    });

    usersDummy = await updatedUser;

    return {
      meta: {
        message: 'message',
        status: 'success',
      },
      data: usersDummy,
    };
  }

  async deleteUser(id: number): Promise<Res<Users>> {
    usersDummy = await usersDummy.filter((u) => u.id != id);

    return {
      meta: {
        message: 'message',
        status: 'success',
      },
      data: usersDummy,
    };
  }
}
