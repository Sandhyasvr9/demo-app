import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) { }

    isLoggedIn(): boolean {
        // Check if user is logged in (e.g., using a token or session storage)
        return !!localStorage.getItem('authToken');
    }

    setToken(token) {
        localStorage.setItem('authToken', token);
    }

    getToken() {
        return localStorage.getItem('authToken');
    }

    logout() {
        localStorage.removeItem('authToken');
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}
