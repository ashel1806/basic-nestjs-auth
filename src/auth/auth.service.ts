import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(username: string, password: string) {
    // Verificamos que el usuario y la contraseña sean correctos,
    // de lo contrario lanzamos una excepción de tipo UnauthorizedExceptions
    if (
      username !== process.env.USERNAME ||
      password !== process.env.PASSWORD
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Si el usuario y la contraseña son correctos, retornamos un mensaje de éxito
    return {
      message: 'Login successful',
    };
  }
}
