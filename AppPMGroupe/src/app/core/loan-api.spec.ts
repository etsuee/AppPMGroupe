import { TestBed } from '@angular/core/testing';
import { LoanApi } from './loan-api';
import { Loans } from '../models/loans';

describe('LoanApi', () => {
  let service: LoanApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post a loan', async () => {
    const loan: any = {
      itemId: 1,
      borrower: 'John Doe',
      borrowerEmail: 'john.doe@example.com',
      startDate: '{{J-3}}',
      dueDate: '{{J+7}}',
    };

    const result = await service.postLoan(loan);
    expect(result).toEqual({
      ...loan,
      id: expect.any(Number),
      returnedAt: null,
    });
  });
});
