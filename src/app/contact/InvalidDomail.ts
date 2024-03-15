import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainVal(hosts: string[]) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value?.toLoverCase();
    
    if (!value) return null; // null = Valid
    
    const matches = hosts.some( host => value.indexOf(`@${host}`) > -1 );
  
    return matches ? { invalidDomain : true} : null;
  }

}