export function useAuth() {
      return { session: { user: { id: 'mock-user', email: 'mock@example.com' } }, login: () => {}, signup: () => {}, logout: () => {} };
    }
