import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qigmfppofpjwobjkfsoe.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZ21mcHBvZnBqd29iamtmc29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3ODExNzksImV4cCI6MjAyNjM1NzE3OX0._cdnFcs317J4LZJpAdOgdNS4HDcAVxrfTHz88i1siio",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpZ21mcHBvZnBqd29iamtmc29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3ODExNzksImV4cCI6MjAyNjM1NzE3OX0._cdnFcs317J4LZJpAdOgdNS4HDcAVxrfTHz88i1siio"
    }
})