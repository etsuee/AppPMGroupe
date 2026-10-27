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

  it('should post a loan return', async () => {
    const loanId = 1;
    const result = await service.postLoanReturn(loanId);
    expect(result).toEqual({
      id: 1,
      itemId: expect.any(Number),
      borrower: expect.any(String),
      borrowerEmail: expect.any(String),
      startDate: expect.any(String),
      dueDate: expect.any(String),
      returnedAt: expect.any(String),
    });
  });
});
