import { inject, Injectable, Service, signal } from '@angular/core';
import { MaterialDto } from '../models/items';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES, API_URL } from './api';
import { finalize } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Material {
    private readonly axios = inject(HttpClient)
    readonly items = signal<MaterialDto[]>([])
    readonly isLoading = signal(false)
    readonly error = signal<string | null>(null)

    getImes() : void{
        this.isLoading.set(true)

        this.axios.get<MaterialDto[]>(`${API_URL}${API_ROUTES.items}`)
        .pipe(
            finalize(() => this.isLoading.set(false))
        )
        .subscribe({
            next: (item) => {
                this.items.set(item)
            }, 
            error: (err) => {
                this.error.set(
                    err.error?.message ??
                    'Impossible de recuperes la liste de material'
                )
            }
        })
    }
}
