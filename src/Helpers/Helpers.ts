export const getValue = (idElement: string) => {
  const element = (document.getElementById(idElement) as HTMLInputElement);
  return element?.value ?? "";
};
