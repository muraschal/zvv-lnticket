declare module 'passkit-generator' {
  export interface PassField {
    key: string;
    label: string;
    value: string;
  }

  export interface PassBarcode {
    message: string;
    format: string;
    messageEncoding: string;
  }

  export interface PassStructure {
    primaryFields?: PassField[];
    secondaryFields?: PassField[];
    auxiliaryFields?: PassField[];
    barcode?: PassBarcode;
  }

  export interface PassProps {
    serialNumber: string;
    description: string;
    organizationName: string;
    teamIdentifier: string;
    passTypeIdentifier: string;
    backgroundColor?: string;
    foregroundColor?: string;
    labelColor?: string;
    logoText?: string;
    generic?: PassStructure;
  }

  export interface PassCertificates {
    wwdr: Buffer;
    signerCert: Buffer;
    signerKey: Buffer;
  }

  export interface PassOptions {
    model: string;
    certificates: PassCertificates;
  }

  export class PKPass {
    static from(options: PassOptions, props: PassProps): Promise<PKPass>;
    generate(): Promise<Buffer>;
  }
} 