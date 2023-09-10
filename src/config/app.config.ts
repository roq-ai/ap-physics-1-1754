interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Content Creator'],
  customerRoles: [],
  tenantRoles: ['Content Creator'],
  tenantName: 'Organization',
  applicationName: 'AP Physics 1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage template examples',
    'Select topic and number of questions to be generated',
    'Generate and review questions',
    'Invite other users to the application',
  ],
};
