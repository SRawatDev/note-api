import { Test, TestingModule } from '@nestjs/testing';
import { PasswordserviceService } from './passwordservice.service';

describe('PasswordserviceService', () => {
  let service: PasswordserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordserviceService],
    }).compile();

    service = module.get<PasswordserviceService>(PasswordserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
