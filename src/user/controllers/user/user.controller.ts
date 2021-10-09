import { Body, Controller, Inject, Put, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../../../auth/utils/Guards';
import { User } from '../../../typeorm/entities/User';
import { AuthUser } from '../../../utils/decorators';
import { PremiumStatusDto } from '../../dtos/PremiumStatusDto';
import { IUserService } from '../../services/user/user';

@UseGuards(AuthenticatedGuard)
@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: IUserService,
  ) {}

  @Put('premium/status')
  async updatePremiumStatus(
    @AuthUser() { discordId }: User,
    @Body() { premium }: PremiumStatusDto,
  ) {
    try {
      return this.userService.updateStatus(discordId, premium);
    } catch (err) {
      console.log(err);
    }
  }
}
