export const getUserType = (associatedCompanyRoles: string[]) =>
  associatedCompanyRoles.length ? 'company' : 'candidate';
