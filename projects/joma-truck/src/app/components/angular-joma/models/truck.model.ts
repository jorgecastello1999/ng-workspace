export interface Truck {
	containerCode: string;
	adaiaCode: string;
	boxes: Box[];
}

export interface Box {
	boxBarcode: string;
	amountBoxes: string;
	typeBox: TypeBox;
	productCode: string;
	amountByBox: string;
	destino: Destino;
	weight: string;
	oldCode: string;
	boxCodeBar: BoxCodeBar;
	codeProduct: CodeProduct;
}

export interface BoxCodeBar {
	gtiN14Confirm: string;
	gtiN14: string;
	confirmOrder: string;
	orderCode: OrderCode;
	boxType: string;
	confirmProduct: ConfirmProduct;
	numProductString: string;
	numProduct: number;
}

export enum ConfirmProduct {
	The30 = '#30',
}

export enum OrderCode {
	Xchnxxxxx028187 = 'XCHNXXXXX028187',
}

export interface CodeProduct {
	fullCode: string;
	identify: string;
	variant: string;
	size: string;
}

export enum Destino {
	S = 'S',
}

export enum TypeBox {
	T400 = 'T400',
	T911 = 'T911',
}
