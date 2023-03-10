export const environment = {
  production: false,
  apiServer: 'https://services.kredete.dev/',
  idServer: 'https://identity.kredete.dev',
  returnUrl: 'http://localhost:4000',
  useBackend: true,
  apiLocal: '/api',
  clientId: 'KredeteAdminAngularClient',
  scope: 'KredeteNodeApi KredetePyApi openid profile offline_access',
  responseType: 'id_token token',
  // apiUploadFolder: 'http://192.168.1.19/api/uploads',
  // b1Server: 'http://localhost:39930/api',
  prompt: 'none',
  userPermission: true,
  transportType: 0,

  data: '',
  hubUrl: '',
  logLevel: '',
  isLogLevelDebugEnabled: false,
  isLogLevelWarningEnabled: false,
  appFooter: '',
  reportDesignerUrl: '',
};
