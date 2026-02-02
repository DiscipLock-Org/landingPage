import * as brevo from '@getbrevo/brevo';

const brevoApiKey = process.env.BREVO_API_KEY;

if (!brevoApiKey) {
  throw new Error('Missing BREVO_API_KEY environment variable');
}

// Initialize the API client
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.ApiKeyEnum.apiKey, brevoApiKey);

export { apiInstance };
export * as brevo from '@getbrevo/brevo';
