export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api-gateway-prod-szwtomas.cloud.okteto.net/user-service/api'
  : 'http://localhost:3000/user-service/api';