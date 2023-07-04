export const API_USER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-gateway-prod-szwtomas.cloud.okteto.net/user-service/api'
    : 'http://localhost:3000/user-service/api';

export const API_TRAININGS_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api-gateway-prod2-szwtomas.cloud.okteto.net/training-service/api'
    : 'http://localhost:3000/training-service/api';
