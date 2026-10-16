import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { LoginResponse } from '../models/login-response.model';

@Service()
export class AuthService {
    private readonly http: HttpClient = inject(HttpClient);

	private readonly apiUrl: string = environment.apiUrl + "/Auth";

    login(email: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(
            `${this.apiUrl}/login?useCookies=false`,
            { email, password }
        );
    }
}
