import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../core/http/models/api-response.model';
import { UserProfile } from '../models/user-profile.model';

@Service()
export class UserProfileService {
	private readonly http: HttpClient = inject(HttpClient);

	private readonly apiUrl: string = environment.apiUrl + "/UserProfile";

	getUserProfile(): Observable<ApiResponse<UserProfile>> {
		return this.http.get<ApiResponse<UserProfile>>(this.apiUrl);
	}
}
