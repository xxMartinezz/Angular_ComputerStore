export class ComputerPage
{
    content: Computer[];
    totalElements: number;
    totalPages: number;

    constructor(content: Computer[], totalElements: number, totalPages: number) {
        this.content = content;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
      }
}

export class Computer
{
    computerId: number;
    computerName: string;
    computerSystem: string;
    computerProcessor: string;
    computerGraphics: string;
    computerMemory: string;
    computerStorageDrivers: string;
    computerInputs?: string;
    computerWarranty?: string;
    computerPrice: string;
    computerAmount: number;
    computerImage?: string;

    constructor(computerName?: string, computerSystem?: string, computerProcessor?: string, computerGraphics?: string, computerMemory?: string, computerStorageDrivers?: string, computerInputs?: string, computerWarranty?: string, computerPrice?: string, computerAmount?: number, computerImage?: string)
    {
        this.computerName = computerName;
        this.computerSystem = computerSystem;
        this.computerProcessor = computerProcessor;
        this.computerGraphics = computerGraphics;
        this.computerMemory = computerMemory;
        this.computerStorageDrivers = computerStorageDrivers;
        this.computerInputs = computerInputs;
        this.computerWarranty = computerWarranty;
        this.computerPrice = computerPrice;
        this.computerAmount = computerAmount;
        this.computerImage = computerImage;
    }
}
