import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { LoanApi } from '../../../core/loan-api';
import { Loan } from '../../../../../models/loans';
import { Item } from '../../../../../models/items';

@Component({
  imports: [],
  selector: 'app-item-detail',
  styleUrl: './item-detail.css',
  templateUrl: './item-detail.html',
})
export class ItemDetail {}
